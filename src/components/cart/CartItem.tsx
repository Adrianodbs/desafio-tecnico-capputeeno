import { ProductInCart } from '@/types/product'
import * as C from './style'
import { formatPrice } from '@/utils/formatPrice'
import { ChangeEvent } from 'react'
import { BsTrash } from 'react-icons/bs'

interface CartItemProps {
  product: ProductInCart
  handleUpdateQuantity(id: string, quantity: number): void
  handleDelete(id: string): void
}

function CartItem({
  product,
  handleUpdateQuantity,
  handleDelete
}: CartItemProps) {
  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    handleUpdateQuantity(product.id, Number(e.target.value))
  }
  return (
    <C.Item>
      <button onClick={() => handleDelete(product.id)} aria-label="Deletar">
        <BsTrash size={18} color="#DE3838" />
      </button>
      <img src={product.image_url} alt={product.name} />
      <div>
        <h4>{product.name}</h4>
        <p>{product.description}</p>
        <div>
          <C.SelectQuantity value={product.quantity} onChange={handleChange}>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
          </C.SelectQuantity>
          <span>{formatPrice(product.price_in_cents)}</span>
        </div>
      </div>
    </C.Item>
  )
}

export default CartItem
