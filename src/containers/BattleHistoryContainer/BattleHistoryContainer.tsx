import { Flex } from '@chakra-ui/react'
import BattleHistory from '@/components/BattleHistory'

const BattleHistoryContainer = () => {
  return (
    <Flex direction={'column'} gap={4}>
      <BattleHistory />
      <BattleHistory />
      <BattleHistory />
      <BattleHistory />
    </Flex>
  )
}

export default BattleHistoryContainer
