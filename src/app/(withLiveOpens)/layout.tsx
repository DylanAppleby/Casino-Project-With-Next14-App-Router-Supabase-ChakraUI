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
    <Flex direction={'column'} width="full">
      <Flex width="full" gap={7}>
        {children}
        {!battleId && path !== '/rewards' && (
          <Flex
            direction="column"
            width={80}
            display={{ base: 'none', lg: 'flex' }}
            minW={80}
          >
            <Flex
              gap={2}
              alignItems="center"
              textAlign="center"
              mt="2.5rem"
              mb={'2.25rem'}
            >
              <Box
                width={3}
                height={3}
                bgColor="#d0a249"
                borderRadius="full"
                boxShadow="0px 0px 8px 3px #d3a03e"
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
