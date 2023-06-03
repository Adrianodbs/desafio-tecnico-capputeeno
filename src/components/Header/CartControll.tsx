import { useLocalStarage } from '@/hooks/useLocalStorage'
import { useRouter } from 'next/navigation'
import { FiShoppingBag } from 'react-icons/fi'
import styled from 'styled-components'

const CartCount = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 100%;
  padding: 0 5px;
  font-size: 10px;
  display: flex;
  align-items: center;
  justify-content: center;

  background: var(--delete-color);
  color: white;

  margin-left: -10px;
  margin-top: 12px;
`

const Container = styled.button`
  position: relative;
  display: flex;
  cursor: pointer;
  border: none;
  background: transparent;
`

function CartControll() {
  const router = useRouter()
  const { value } = useLocalStarage('cart-items', [])

  const handleNavigateToCart = () => {
    router.push('/cart')
  }
  return (
    <Container onClick={handleNavigateToCart}>
      <FiShoppingBag size={24} color="#737380" />
      {value.length > 0 && <CartCount>{value.length}</CartCount>}
    </Container>
  )
}

export default CartControll
