import { FC } from 'react'

import { Box, Flex } from '@chakra-ui/react'

interface IUser {
  name: string
  avatar: string
  level: string
}

interface IBattleDetail {
  rounds: number
  userList: IUser[]
  price: string
}

interface IBattleCard {}

const BattleCard: FC<IBattleCard> = () => {
  return (
    <Flex
      width="full"
      bgColor="#e2e8f029"
      rounded="0.375rem"
      alignItems="center"
      justifyContent="center"
    ></Flex>
  )
}

export default BattleCard
