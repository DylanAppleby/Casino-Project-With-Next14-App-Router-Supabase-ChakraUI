import { Box, Flex, Button } from '@/components/ChakraUIComponents'
import { Badge } from '@chakra-ui/react'
import BattlesContainer from '@/components/container/BattlesContainer'

export default function Battles() {
  return (
    <Flex width={'full'} direction={'column'}>
      <Flex height={'100px'} alignItems={'center'} justifyContent={'space-between'}>
        <Box fontSize={30} width="full">
          Battles
        </Box>
        <Box margin={1}>
          <Button colorScheme="twitter" width={115} height={35}>
            Create Battle
          </Button>
        </Box>
        <Box margin={5} whiteSpace={'nowrap'}>
          <Badge
            borderRadius="50%"
            width={2.5}
            height={2.5}
            bgColor={'#5AD695'}
            margin={2}
          ></Badge>
          Live Opens
        </Box>
        <Box marginLeft={20}>
          <Button
            colorScheme="whiteAlpha"
            borderRadius="50%"
            fontWeight={'bold'}
            color={'white'}
          >
            II
          </Button>
        </Box>
      </Flex>
      <BattlesContainer />
    </Flex>
  )
}
