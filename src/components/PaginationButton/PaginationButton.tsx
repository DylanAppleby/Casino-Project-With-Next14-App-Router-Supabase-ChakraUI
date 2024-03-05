import { Button, Flex, Text } from '@chakra-ui/react'
const PaginationButton = () => {
  return (
    <Flex justifyContent={'space-between'} alignItems={'center'}>
      <Text fontSize={14}>Showing 8 - 1 of 2</Text>
      <Flex gap={3}>
        <Button>Previous</Button>
        <Button>Next</Button>
      </Flex>
    </Flex>
  )
}

export default PaginationButton
