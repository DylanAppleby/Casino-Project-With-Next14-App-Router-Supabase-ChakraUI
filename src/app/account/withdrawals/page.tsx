import { Flex } from '@chakra-ui/react'
import WithdrawalsContainer from '@/containers/WithdrawalsContainer'
import PaginationButton from '@/components/PaginationButton'

const Withdrawals = () => {
  return (
    <Flex width={'full'} direction={'column'} justifyContent={'center'}>
      <Flex direction={'column'} gap={6}>
        <PaginationButton />
        <WithdrawalsContainer />
      </Flex>
    </Flex>
  )
}

export default Withdrawals
