'use client'

import { useState, useCallback, Dispatch, SetStateAction, useEffect } from 'react'
import { Flex, Box, Button, Text } from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowForwardIcon } from '@chakra-ui/icons'
import { IPack } from '@/types/pack'
import SelectedCard from '../SelectedCard'

interface IPackInfoWidget {
  total: number
  selectedPacks: IPack[]
  setTotal: Dispatch<SetStateAction<number>>
  setSelectedPacks: Dispatch<SetStateAction<IPack[]>>
}

const PackInfoWidget = ({
  total,
  selectedPacks,
  setSelectedPacks,
  setTotal,
}: IPackInfoWidget) => {
  const handleCancelClick = useCallback(() => {
    setSelectedPacks([])
    setTotal(0)
  }, [setSelectedPacks, setTotal])

  return (
    <Flex
      position="fixed"
      bottom={4}
      left="50%"
      transform="translateX(-50%)"
      bg="#121212"
      color="white"
      p={3}
      width={'900px'}
      height={'250px'}
      borderRadius="md"
      zIndex={9999}
      px={6}
      pt={6}
      pb={4}
      rounded={10}
      justifyContent={'space-between'}
    >
      <Flex gap={4}>
        {selectedPacks.map((selected, index) => (
          <SelectedCard
            key={index + selected.imageURL + selected.label + selected.price}
            imageURL={selected.imageURL}
            label={selected.label}
            price={selected.price}
            packId={selected.id}
            selectedPacks={selectedPacks}
            setTotal={setTotal}
            setSelectedPacks={setSelectedPacks}
          />
        ))}
      </Flex>
      <Flex direction={'column'} ml={6} gap={4}>
        <Flex
          width={'full'}
          height={'full'}
          bg={'#22272b'}
          rounded={8}
          direction={'column'}
          px={3}
          py={4}
          justifyContent={'space-between'}
        >
          <Flex justifyContent={'space-between'} alignItems={'center'}>
            <Text fontWeight={'bold'}>Packs</Text>
            <Flex gap={2} alignItems={'center'}>
              <Text fontWeight={'bold'}>{selectedPacks.length}</Text>
              <Box rounded={2}>
                <Image
                  src={'/assets/images/wincrate.webp'}
                  width={4}
                  height={4}
                  alt={'wincrate'}
                  style={{ width: '16px', height: '16px' }}
                />
              </Box>
            </Flex>
          </Flex>
          <Flex justifyContent={'space-between'} alignItems={'center'}>
            <Text fontWeight={'bold'}>Total</Text>
            <Text fontWeight={'bold'}>{total.toFixed(2)}</Text>
          </Flex>
        </Flex>
        <Flex direction={'column'} gap={4}>
          <Link href={'/packs/id'}>
            <Button bg={'yellow.500'} _hover={{ bg: 'yellow.600' }} height={12}>
              <Flex alignItems={'center'} gap={2}>
                <Text whiteSpace={'nowrap'}>View pack Contents</Text>
                <ArrowForwardIcon />
              </Flex>
            </Button>
          </Link>
          <Button bg={'transparent'} height={12} onClick={handleCancelClick}>
            Cancel
          </Button>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default PackInfoWidget
