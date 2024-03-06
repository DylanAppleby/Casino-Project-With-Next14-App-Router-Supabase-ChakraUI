import { Flex } from '@chakra-ui/react'
import FiatContainer from '@/components/container/FiatContainer'
import PaginationButton from '@/components/PaginationButton'
const FiatDeposits = () => {
  return (
    <Flex width={'full'} direction={'column'} justifyContent={'center'}>
      <Flex direction={'column'} gap={6}>
        <PaginationButton />
        <FiatContainer />
      </Flex>
    </Flex>
  )
}

export default FiatDeposits
