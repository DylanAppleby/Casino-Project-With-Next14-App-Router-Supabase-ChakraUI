'use client'
import { ReactNode } from 'react'
import { usePathname, useParams } from 'next/navigation'
import { Flex, Box, Text } from '@chakra-ui/react'
import GiftVoucherContainer from '@/containers/GiftVoucherContainer'
import UnlockCrate from '@/components/UnlockCrate'
import FunctionCardContainer from '@/containers/FunctionCardContainer'

interface IWithLiveOpens {
  children: ReactNode
}

const WithLiveOpens = ({ children }: Readonly<IWithLiveOpens>) => {
  const path = usePathname()
  const { id: battleId } = useParams()

  return (
    <Flex width="full" direction={'column'}>
      <Flex width={'full'} gap={7} my={18}>
        {children}
        {!battleId && path != '/rewards' && (
          <Flex width="full" display={{ base: 'none', lg: 'flex' }} maxWidth={80}>
            <Flex direction="column" width="full">
              <Flex gap={2} alignItems="center" textAlign="center" my="2.5rem">
                <Box
                  width={3}
                  height={3}
                  bgColor="#d0a249"
                  borderRadius="full"
                  boxShadow="0px 1px 8px 3px #d3a03e"
                />
                <Text
                  fontSize={'lg'}
                  color={'#fefefe'}
                  style={{ fontFamily: 'Clash Grotesk, sans-serif', fontWeight: 500 }}
                >
                  Live Opens
                </Text>
              </Flex>
              <GiftVoucherContainer />
            </Flex>
          </Flex>
        )}
      </Flex>
      {path === '/' && (
        <Flex width="full" direction="column" gap={10} mb={20}>
          <UnlockCrate />
          <FunctionCardContainer />
        </Flex>
      )}
    </Flex>
  )
}

export default WithLiveOpens
