'use client'

import { Button, useColorModeValue, Container, Flex } from '@chakra-ui/react'

const BattleCard = () => {
  return (
    <Flex
      minH={'100vh'}
      align={'start'}
      justify={'start'}
      bg={useColorModeValue('gray.50', 'gray.800')}
    >
      <Container
        maxW={'lg'}
        bg={useColorModeValue('white', 'whiteAlpha.100')}
        boxShadow={'xl'}
        rounded={'lg'}
        p={6}
      >
        <Button w="100%">Join Battle</Button>
      </Container>
    </Flex>
  )
}

export default BattleCard
