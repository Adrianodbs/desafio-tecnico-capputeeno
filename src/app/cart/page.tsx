'use client'
import { DefaultPageLayout } from '@/components/defaultPageLayout'
import * as C from './style'
import { BackBtn } from '@/components/BackButton'
import { useLocalStarage } from '@/hooks/useLocalStorage'
import { ProductInCart } from '@/types/product'
import { formatPrice } from '@/utils/formatPrice'
import CartItem from '@/components/cart/CartItem'

function CartPage() {
  const { value, updateLocalStorage } = useLocalStarage<ProductInCart[]>(
    'cart-items',
    []
  )

  const calculateTotal = (value: ProductInCart[]) => {
    return value.reduce(
      (sum, item) => (sum += item.price_in_cents * item.quantity),
      0
    )
  }

  const cartTotal = formatPrice(calculateTotal(value))

  const handleUpdateQuantity = (id: string, quantity: number) => {
    const newValue = value.map(item => {
      if (item.id !== id) return item
      return { ...item, quantity: quantity }
    })
    updateLocalStorage(newValue)
  }

  const handleDeleteItem = (id: string) => {
    const newValue = value.filter(item => {
      if (item.id !== id) return item
    })
    updateLocalStorage(newValue)
  }
  return (
    <DefaultPageLayout>
      <C.Container>
        <C.CartListContainer>
          <BackBtn navigate="/" />
          <h3>Seu carrinho</h3>
          <p>
            Total {value.length} produtos
            <span>{cartTotal}</span>
          </p>

          <C.CartList>
            {value.map(item => (
              <CartItem
                product={item}
                handleUpdateQuantity={handleUpdateQuantity}
                handleDelete={handleDeleteItem}
                key={item.id}
              />
            ))}
          </C.CartList>
        </C.CartListContainer>
      </C.Container>
    </DefaultPageLayout>
  )
}

export default CartPage
