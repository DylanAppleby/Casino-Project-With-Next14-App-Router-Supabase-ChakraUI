import { Box, Flex, Button } from '@/components/ChakraUIComponents'
import BattlesContainer from '@/containers/BattlesContainer'
import Link from 'next/link'

export default function Battles() {
  return (
    <Flex width={'full'} direction={'column'}>
      <Flex height={'100px'} alignItems={'center'} justifyContent={'space-between'}>
        <Box fontSize={24} width="full" fontWeight="black">
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
