import { Flex, Box, Text } from '@chakra-ui/react'

import SearchBar from '@/components/SearchBar'
import GiftCardContainer from '@/components/container/GiftCardContainer'
import GiftVouncherContainer from '@/components/container/GiftVouncherContainer'

export default function Home() {
  return (
    <Flex gap={7} width="full" maxWidth="1440px" px={{ base: 4, md: 6, lg: 10 }}>
      <Flex direction="column" width="full" minHeight={1000}>
        <SearchBar />
        <GiftCardContainer />
      </Flex>
      <Flex width="full" display={{ base: 'none', lg: 'flex' }} maxWidth={80}>
        <Flex direction="column" width="full">
          <Flex gap={2} alignItems="center" textAlign="center" my="2.5rem">
            <Box width={3} height={3} bgColor="yellow" borderRadius="full" />
            <Text fontWeight="bold" fontSize={'lg'}>
              Live Opens
            </Text>
          </Flex>
          <GiftVouncherContainer />
        </Flex>
      </Flex>
    </Flex>
  )
}
