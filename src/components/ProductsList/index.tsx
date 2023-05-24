'use client'
import { useProducts } from '@/hooks/useProducts'

interface ProductsListProps {}

function ProductsList(props: ProductsListProps) {
  const { data } = useProducts()
  return <div>ProductsList</div>
}

export default ProductsList
