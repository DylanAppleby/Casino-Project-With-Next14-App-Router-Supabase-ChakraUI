import { Flex, Box, Text } from '@chakra-ui/react'

import SearchBar from '@/components/SearchBar'
import GiftCardContainer from '@/components/container/GiftCardContainer'
export default function Home() {
  return (
    <Flex width="full" direction={'column'}>
      <Flex width="full" gap={7}>
        <Flex direction="column" width="full" minHeight={1000}>
          <SearchBar />
          <GiftCardContainer />
        </Flex>
      </Flex>
    </Flex>
  )
}
