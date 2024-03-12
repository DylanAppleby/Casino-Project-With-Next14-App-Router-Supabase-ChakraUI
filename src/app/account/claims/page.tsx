import { Flex, Text } from '@chakra-ui/react'

const Claims = () => {
  return (
    <Flex width={'full'} direction={'column'}>
      <Flex direction={'column'} gap={6}>
        <Flex
          width={'full'}
          height={'50px'}
          borderBottom={'1px'}
          fontSize={'20px'}
          fontWeight={'black'}
        >
          Claims
        </Flex>
        <Flex
          alignItems={'center'}
          justifyContent={'center'}
          width={'full'}
          height={'10rem'}
          direction={'column'}
        >
          <Text fontSize={'30px'} fontWeight={'black'}>
            IRL Claims
          </Text>
          <Text> (IRL claim requests will appear here)</Text>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default Claims
