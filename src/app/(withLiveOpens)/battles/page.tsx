import { Box, Flex, Button } from '@/components/ChakraUIComponents'
import BattlesContainer from '@/containers/BattlesContainer'

export default function Battles() {
  return (
    <Flex width="full" direction={'column'}>
      <Flex
        mt={'30px'}
        mb={'32px'}
        width="full"
        alignItems={'center'}
        justifyContent={'space-between'}
      >
        <Box fontSize={28} width="full" fontWeight="black">
          Battles
        </Box>
        <Box>
          <Button
            bgColor=" #FABD2D"
            _hover={{ bgColor: 'yellow.400' }}
            height={8}
            padding={3}
            fontSize={14}
          >
            Create Battle
          </Button>
        </Box>
      </Flex>
      <BattlesContainer />
    </Flex>
  )
}
