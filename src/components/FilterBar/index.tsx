'use client'

import { styled } from 'styled-components'
import { FilterByType } from './FilterByType'

interface FilterBarProps {}

const FilterContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: start;
  justify-content: space-between;
`

function FilterBar() {
  return (
    <FilterContainer>
      <FilterByType />
    </FilterContainer>
  )
}

export default FilterBar
