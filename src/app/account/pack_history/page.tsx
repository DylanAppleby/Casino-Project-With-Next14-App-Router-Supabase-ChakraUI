'use client'
import { Flex } from '@chakra-ui/react'
import PackHistoryContainer from '@/components/container/PackHistoryContainer'
import PaginationButton from '@/components/PaginationButton'
const BattleHistory = () => {
  return (
    <Flex width={'full'} direction={'column'}>
      <Flex direction={'column'} gap={6}>
        <PaginationButton />
        <PackHistoryContainer />
      </Flex>
    </Flex>
  )
}

export default BattleHistory
