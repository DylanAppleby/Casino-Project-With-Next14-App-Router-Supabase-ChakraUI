'use client'

import { FC, ReactNode } from 'react'

import { ChakraProvider, extendTheme } from '@chakra-ui/react'

interface ILayoutProvider {
  children: ReactNode
}

const theme = extendTheme({
  initialColorMode: 'dark',
  useSystemColorMode: false,
  styles: {
    global: (props: { colorMode: string }) => ({
      body: {
        bg: props.colorMode === 'light' ? 'gray.100' : '#181718',
      },
    }),
  },
})

const LayoutProvider: FC<ILayoutProvider> = ({ children }) => (
  <ChakraProvider theme={theme}>{children}</ChakraProvider>
)

export default LayoutProvider
