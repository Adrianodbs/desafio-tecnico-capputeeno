'use client'

import { FilterContextProvider } from '@/context/filterContext'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'

interface DefaultProvidersProps {
  children: ReactNode
}

const theme = {
  desktopBreakpoint: '968px',
  tableBreakpoint: '768px'
}

function DefaultProviders({ children }: DefaultProvidersProps) {
  const client = new QueryClient()
  return (
    <QueryClientProvider client={client}>
      <FilterContextProvider>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </FilterContextProvider>
    </QueryClientProvider>
  )
}

export default DefaultProviders
