'use client'
import * as C from './style'
import { Saira_Stencil_One } from 'next/font/google'
import { CiSearch } from 'react-icons/ci'
import CartControll from './CartControll'

const sairaStencial = Saira_Stencil_One({
  weight: ['400'],
  subsets: ['latin']
})

interface HeaderProps {}

function Header() {
  return (
    <C.TagHeader>
      <C.Logo className={sairaStencial.className}>Capputeeno</C.Logo>
      <div className="right">
        <C.Label>
          <C.PrimaryInput placeholder="Procurando por algo específico?" />
          <CiSearch size={20} />
        </C.Label>
        <CartControll />
      </div>
    </C.TagHeader>
  )
}

export default Header
