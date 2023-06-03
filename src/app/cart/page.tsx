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
  const deliveryFee = 4000
  const cartTotalWithDelivery = formatPrice(calculateTotal(value) + deliveryFee)

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

        <C.CartResultContainer>
          <h3>Resumo do Pedido</h3>
          <C.TotalItem isBold={false}>
            <p>Subtotal de produtos</p>
            <p>{cartTotal}</p>
          </C.TotalItem>
          <C.TotalItem isBold={false}>
            <p>Entrega</p>
            <p>{formatPrice(deliveryFee)}</p>
          </C.TotalItem>
          <C.Divider />
          <C.TotalItem isBold>
            <p>Total</p>
            <p>{cartTotalWithDelivery}</p>
          </C.TotalItem>
          <C.ShopBtn>FINALIZAR A COMPRA</C.ShopBtn>
        </C.CartResultContainer>
      </C.Container>
    </DefaultPageLayout>
  )
}

export default CartPage
