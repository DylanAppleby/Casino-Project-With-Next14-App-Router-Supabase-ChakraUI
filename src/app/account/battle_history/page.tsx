'use client'
import { Flex } from '@chakra-ui/react'
import BattleHistoryContainer from '@/components/container/BattleHistoryContainer/BattleHistoryContainer'
import PaginationButton from '@/components/PaginationButton'
const BattleHistory = () => {
  return (
    <Flex width={'full'} direction={'column'}>
      <Flex direction={'column'} gap={6}>
        <PaginationButton />
        <BattleHistoryContainer />
      </Flex>
    </Flex>
  )
}

export default BattleHistory
