import type { Metadata } from 'next'
import { Urbanist } from 'next/font/google'
import { ChakraProvider, Flex } from '@chakra-ui/react'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { ReactNode } from 'react'

const urbanist = Urbanist({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

interface IRootLayout {
  children: ReactNode
}

const RootLayout = ({ children }: Readonly<IRootLayout>) => (
  <html lang="en">
    <body className={urbanist.className}>
      <ChakraProvider>
        <Header />
        <Flex justifyContent="center">{children}</Flex>
        <Footer />
      </ChakraProvider>
    </body>
  </html>
)

export default RootLayout