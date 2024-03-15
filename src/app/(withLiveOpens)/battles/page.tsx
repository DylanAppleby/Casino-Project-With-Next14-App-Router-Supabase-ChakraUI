import { Box, Flex, Button } from '@/components/ChakraUIComponents'
import BattlesContainer from '@/containers/BattlesContainer'
import Link from 'next/link'

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
        <Link href={'/battles/create'}>
          <Box margin={1}>
            <Button bgColor=" #FABD2D">Create Battle</Button>
          </Box>
        </Link>
      </Flex>
      <BattlesContainer />
    </Flex>
  )
}
