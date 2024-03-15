'use client'

import { useState, Dispatch, SetStateAction } from 'react'

import { Flex, Button, Text } from '@chakra-ui/react'

interface ISelectPlayers {
  battleType: string
  playerNum: string
  index: number
  activeButton: number
  setActiveButton: Dispatch<SetStateAction<number>>
}

const SelectPlayers = ({
  battleType,
  playerNum,
  index,
  activeButton,
  setActiveButton,
}: ISelectPlayers) => {
  const toggleButtonColor = (buttonId: number) => {
    setActiveButton(buttonId)
  }

  return (
    <Flex direction={'column'} gap={5} width={'full'}>
      <Flex direction={'row'} gap={5}>
        <Flex gap={2} width={'full'}>
          <Button
            gap={1}
            alignItems="center"
            justifyContent="center"
            cursor="pointer"
            onClick={() => toggleButtonColor(index)}
            bgColor={activeButton === index ? '#d3a03e' : 'rgba(48, 46, 48, 0.3)'}
            _hover={{ bg: activeButton === index ? '#d3a03e' : 'rgba(48, 46, 48, 0.3)' }}
            borderWidth={activeButton === index ? '3px' : 'none'}
            borderColor={activeButton === index ? '#694d16' : 'rgba(48, 46, 48, 0.3)'}
            width={'full'}
            minHeight={'80px'}
            minWidth={'101px'}
            color={'#eeeee8'}
            flexDirection={'column'}
          >
            <Text fontWeight="black" fontSize={'18px'}>
              {battleType}
            </Text>
            <Text color={'rgba(255, 255, 255, 0.5)'} fontSize={'14px'}>
              {playerNum}
            </Text>
          </Button>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default SelectPlayers
