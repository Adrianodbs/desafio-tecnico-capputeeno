'use client'
import { DefaultPageLayout } from '@/components/defaultPageLayout'
import * as C from './style'
import { BiShoppingBag } from 'react-icons/bi'
import { BackBtn } from '@/components/BackButton'
import { useProduct } from '@/hooks/useProduct'
import { formatPrice } from '@/utils/formatPrice'

function Product({ searchParams }: { searchParams: { id: string } }) {
  const { data } = useProduct(searchParams.id)

  const handleAddToCart = () => {
    const cartItems = localStorage.getItem('cart-items')
    if (cartItems) {
      let cartItemsArray = JSON.parse(cartItems)

      let existingProductIndex = cartItemsArray.findIndex(
        (item: { id: string }) => item.id === searchParams.id
      )

      if (existingProductIndex != -1) {
        cartItemsArray[existingProductIndex].quantity += 1
      } else {
        cartItemsArray.push({ ...data, quantity: 1, id: searchParams.id })
      }

      localStorage.setItem('cart-items', JSON.stringify(cartItemsArray))
    } else {
      const newCart = [
        {
          ...data,
          id: searchParams.id,
          quantity: 1
        }
      ]
      localStorage.setItem('cart-items', JSON.stringify(newCart))
    }
  }

  return (
    <DefaultPageLayout>
      <C.Container>
        <BackBtn navigate="/" />
        <section>
          <img src={data?.image_url} />
          <div>
            <C.ProductInfo>
              <span>{data?.category}</span>
              <h2>{data?.name}</h2>
              <span>{formatPrice(data?.price_in_cents ?? 0)}</span>
              <p>*Frete grátis para todo o Brasil.</p>
              <div>
                <h3>Descrição</h3>
                <p>{data?.description}</p>
              </div>
            </C.ProductInfo>
            <button onClick={handleAddToCart}>
              <BiShoppingBag size={20} />
              Adicionar ao carrinho
            </button>
          </div>
        </section>
      </C.Container>
    </DefaultPageLayout>
  )
}

export default Product
