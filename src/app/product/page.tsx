'use client'
import { DefaultPageLayout } from '@/components/defaultPageLayout'
import * as C from './style'
import { TiArrowBackOutline } from 'react-icons/ti'
import { BackBtn } from '@/components/BackButton'
import { useProduct } from '@/hooks/useProduct'

function Product({ searchParams }: { searchParams: { id: string } }) {
  const { data } = useProduct(searchParams.id)
  console.log(data)
  return (
    <DefaultPageLayout>
      <C.Container>
        <BackBtn navigate="/" />
        <section>Informação do produto</section>
      </C.Container>
    </DefaultPageLayout>
  )
}

export default Product
