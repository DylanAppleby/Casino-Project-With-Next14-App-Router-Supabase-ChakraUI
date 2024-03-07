import { Box, Flex, Tag } from '@chakra-ui/react'

interface IBattleDetailCard {
  index: number
}

const BattleDetailCard = ({ index }: IBattleDetailCard) => {
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

export default BattleDetailCard
