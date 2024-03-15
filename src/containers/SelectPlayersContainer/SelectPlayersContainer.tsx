'use client'

import { useState } from 'react'

import { Flex, Text, Image } from '@/components/ChakraUIComponents'
import { SelectPlayers } from '@/components/CreateBattle'

import { SELECT_PLAYERS } from '@/constants/mock'

const SelectPlayersContainer = () => {
  const [activeButton, setActiveButton] = useState<number>(1)

  return (
    <Flex direction={'column'} gap={5}>
      <Text fontSize={'20px'} fontWeight={'black'}>
        Select Players
      </Text>
      <Flex gap={5} width={'full'} direction={{ base: 'column', md: 'row' }}>
        {SELECT_PLAYERS.map(({ battleType, playerNum, index }) => {
          return (
            <SelectPlayers
              battleType={battleType}
              playerNum={playerNum}
              index={index}
              activeButton={activeButton}
              setActiveButton={setActiveButton}
            />
          )
        })}
      </Flex>
    </Flex>
  )
}

export default SelectPlayersContainer
