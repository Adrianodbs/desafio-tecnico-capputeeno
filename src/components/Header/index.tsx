'use client'
import * as C from './style'
import { Saira_Stencil_One } from 'next/font/google'
import CartControll from './CartControll'
import { PrimaryInputWSearchIcon } from './PrimaryInput'
import { useFilter } from '@/hooks/useFilter'

const sairaStencial = Saira_Stencil_One({
  weight: ['400'],
  subsets: ['latin']
})

interface HeaderProps {}

function Header() {
  const { setSearch, search } = useFilter()
  return (
    <C.TagHeader>
      <C.Logo className={sairaStencial.className}>Capputeeno</C.Logo>
      <div className="right">
        <PrimaryInputWSearchIcon
          value={search}
          handleChange={setSearch}
          placeholder="Procurando por algo específico?"
        />
        <CartControll />
      </div>
    </C.TagHeader>
  )
}

export default Header
