'use client'
import { Flex } from '@chakra-ui/react'
import FiatContainer from '@/components/container/FiatContainer'
const FiatDeposits = () => {
  return (
    <Flex width={'full'} direction={'column'} justifyContent={'center'}>
      <FiatContainer />
    </Flex>
  )
}

export default FiatDeposits
