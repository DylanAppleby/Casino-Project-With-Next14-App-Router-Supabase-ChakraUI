'use client'

import { useState, Dispatch, SetStateAction } from 'react'

import { Flex, Button, Text, Image } from '@chakra-ui/react'
import { Switch } from '@chakra-ui/react'

interface IBattleOptions {
  ImageUrl: string
  battleProperty: string
  Label: string
  index: number
  activeButton: number
  setActiveButton: Dispatch<SetStateAction<number>>
}

const BattleOptions = ({
  ImageUrl,
  battleProperty,
  Label,
  index,
  activeButton,
  setActiveButton,
}: IBattleOptions) => {
  const toggleButtonColor = (buttonId: number) => {
    setActiveButton(buttonId)
  }
  return (
    <Flex
      direction={'row'}
      gap={2}
      width={'full'}
      height={'full'}
      bgColor={'rgba(48, 46, 48, 0.3)'}
      padding={'20px'}
      rounded={'10px'}
      justifyContent={'space-between'}
    >
      <Flex
        direction={'column'}
        justifyContent={'center'}
        gap={2}
        height={'auto'}
        width={'full'}
        minWidth={'250px'}
      >
        <Flex
          direction={'row'}
          width={'30px'}
          height={'30px'}
          alignItems={'center'}
          bgColor={'rgba(255, 255, 255, 0.1)'}
          rounded={'5px'}
        >
          <Image src={ImageUrl} alt={''} width={'full'} height={'full'} />
          <Text
            whiteSpace={'nowrap'}
            margin={'10px'}
            fontSize={'20px'}
            fontWeight={'bold'}
          >
            {battleProperty}
          </Text>
        </Flex>
        <Text fontSize={'16px'} fontWeight={'bold'} color={'rgba(255, 255, 255, 0.5)'}>
          {Label}
        </Text>
      </Flex>
      <Flex alignItems={'center'}>
        <Switch colorScheme={'orange'} onClick={() => toggleButtonColor(index)} />
      </Flex>
    </Flex>
  )
}

export default BattleOptions
