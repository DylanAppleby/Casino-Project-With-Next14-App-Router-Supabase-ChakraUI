import { Flex, Text } from '@chakra-ui/react'
const Stats = () => {
  return (
    <Flex width={'full'} gap={6} direction={{ base: 'column', md: 'column', lg: 'row' }}>
      <Flex
        flex={1}
        borderWidth={2}
        rounded={6}
        direction={'column'}
        py={5}
        pl={9}
        height="max-content"
      >
        <Text fontSize={20} color={'#595759'} fontWeight={'bold'}>
          XP
        </Text>
        <Text fontSize={32}>3173</Text>
      </Flex>
      <Flex
        flex={1}
        borderWidth={2}
        rounded={6}
        direction={'column'}
        py={5}
        pl={9}
        height="max-content"
      >
        <Text fontSize={20} color={'#595759'} fontWeight={'bold'}>
          Level
        </Text>
        <Text fontSize={32}>0</Text>
        <Text fontSize={20} color={'#595759'} fontWeight={'bold'}>
          2500 XP to level
        </Text>
      </Flex>
    </Flex>
  )
}

export default Stats
