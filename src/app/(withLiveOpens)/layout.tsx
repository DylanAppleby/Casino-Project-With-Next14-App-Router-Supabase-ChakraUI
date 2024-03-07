'use client'
import { ReactNode } from 'react'
import { usePathname } from 'next/navigation'
import { Flex, Box, Text } from '@chakra-ui/react'
import GiftVoucherContainer from '@/components/container/GiftVoucherContainer'
import UnlockCrate from '@/components/UnlockCrate'
import FunctionCardContainer from '@/components/container/FunctionCardContainer'

interface IWithLiveOpens {
  children: ReactNode
}
const WithLiveOpens = ({ children }: Readonly<IWithLiveOpens>) => {
  const path = usePathname()
  return (
    <Flex width="full" direction={'column'}>
      <Flex width={'full'} gap={7} my={18}>
        {children}
        <Flex width="full" display={{ base: 'none', lg: 'flex' }} maxWidth={80}>
          <Flex direction="column" width="full">
            <Flex gap={2} alignItems="center" textAlign="center" my="2.5rem">
              <Box
                width={3}
                height={3}
                bgColor="yellow"
                borderRadius="full"
                boxShadow="0px 1px 8px 3px #d3a03e"
              />
              <Text fontSize={'lg'}>Live Opens</Text>
            </Flex>
            <GiftVoucherContainer />
          </Flex>
        </Flex>
      </Flex>
      {path === '/' ? (
        <Flex width="full" direction="column" gap={10} mb={20}>
          <UnlockCrate />
          <FunctionCardContainer />
        </Flex>
      ) : (
        ''
      )}
    </Flex>
  )
}

export default WithLiveOpens
