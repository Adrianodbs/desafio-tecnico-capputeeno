'use client'
import { DefaultPageLayout } from '@/components/defaultPageLayout'
import * as C from './style'
import { BiShoppingBag } from 'react-icons/bi'
import { BackBtn } from '@/components/BackButton'
import { useProduct } from '@/hooks/useProduct'
import { formatPrice } from '@/utils/formatPrice'

function Product({ searchParams }: { searchParams: { id: string } }) {
  const { data } = useProduct(searchParams.id)

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
            <button>
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
