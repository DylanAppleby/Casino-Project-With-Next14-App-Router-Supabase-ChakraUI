import { Box, Flex, Tag } from '@chakra-ui/react'
import Image from 'next/image'
import { CiTextAlignCenter } from 'react-icons/ci'

interface IBattleCard {
  index: number
}

const BattleCard = ({ index }: IBattleCard) => {
  return (
    <Flex
      flexDirection="column"
      width="full"
      height="full"
      bgColor="#e2e8f029"
      rounded="0.375rem"
      alignItems="center"
      justifyContent="center"
    >
      <Box textAlign="center">Round</Box>
      <Box textAlign="center">{`${index}`}</Box>
    </Flex>
  )
}

export default BattleCard
