'use client'

import { useState } from 'react'

import { Flex, Text, Image } from '@/components/ChakraUIComponents'
import { BattleOptions } from '@/components/CreateBattle'

import { BATTLE_OPTIONS } from '@/constants/mock'

const BattleOptionsContainer = () => {
  const [activeButton, setActiveButton] = useState<number>(1)
  return (
    <Flex direction={'column'} gap={7}>
      <Text fontSize={'20px'} fontWeight={'black'}>
        Battle Options
      </Text>
      <Flex gap={7} width={'full'} direction={'column'}>
        {BATTLE_OPTIONS.map(({ ImageUrl, battleProperty, Label, index }) => {
          return (
            <BattleOptions
              ImageUrl={ImageUrl}
              battleProperty={battleProperty}
              Label={Label}
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

export default BattleOptionsContainer
