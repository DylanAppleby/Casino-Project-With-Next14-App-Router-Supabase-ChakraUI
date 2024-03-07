import { Flex, Box, Text } from '@chakra-ui/react'

import SearchBar from '@/components/SearchBar'
import GiftCardContainer from '@/components/container/GiftCardContainer'
import GiftVouncherContainer from '@/components/container/GiftVouncherContainer'
import UnlockCrate from '@/components/UnlockCrate'
import FunctionCardContainer from '@/components/container/FunctionCardContainer'
export default function Home() {
  return (
    <Flex width="full" direction={'column'}>
      <Flex width="full" gap={7}>
        <Flex direction="column" width="full" minHeight={1000}>
          <SearchBar />
          <GiftCardContainer />
        </Flex>
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
            <GiftVouncherContainer />
          </Flex>
        </Flex>
      </Flex>
      <Flex width="full" direction="column" gap={10} mb={20}>
        <UnlockCrate />
        <FunctionCardContainer />
      </Flex>
    </Flex>
  )
}
