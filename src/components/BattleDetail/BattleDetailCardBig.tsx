import { Box, Tag, Flex } from '@chakra-ui/react'
import Image from 'next/image'

interface IBattleDetailCardBig {
  index: number
}

const BattleDetailCardBig = ({ index }: IBattleDetailCardBig) => {
  return (
    <Flex
      flexDirection="column"
      width="full"
      height="full"
      minHeight={'200px'}
      alignItems="center"
      justifyContent="center"
      bgColor="#e2e8f029"
      rounded="0.375rem"
    >
      <Box textAlign="center">Round</Box>
      <Box textAlign="center">{`${index}`}</Box>
    </Flex>
  )
}

export default BattleDetailCardBig
