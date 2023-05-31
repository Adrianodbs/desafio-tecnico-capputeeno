import { useLocalStarage } from '@/hooks/useLocalStorage'
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

const Container = styled.div`
  position: relative;
  display: flex;
`

function CartControll() {
  const { value } = useLocalStarage('cart-items', [])
  return (
    <Container>
      <FiShoppingBag size={24} color="#737380" />
      {value.length > 0 && <CartCount>{value.length}</CartCount>}
    </Container>
  )
}

export default CartControll
