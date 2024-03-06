import { Flex } from '@chakra-ui/react'
import CryptoContainer from '@/components/container/CryptoContainer'
import PaginationButton from '@/components/PaginationButton'
const CryptoDeposits = () => {
  return (
    <Flex width={'full'} direction={'column'} justifyContent={'center'}>
      <Flex direction={'column'} gap={6}>
        <PaginationButton />
        <CryptoContainer />
      </Flex>
    </Flex>
  )
}

export default CryptoDeposits
