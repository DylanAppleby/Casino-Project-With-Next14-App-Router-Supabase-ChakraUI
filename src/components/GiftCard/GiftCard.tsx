'use client'

import { useState, Dispatch, SetStateAction, useCallback, useEffect } from 'react'
import { Flex, Box, Button, Text, useDisclosure } from '@chakra-ui/react'
import { ViewIcon } from '@chakra-ui/icons'
import Image from 'next/image'
import { IPack } from '@/types/pack'
import GiftCardDetailModal from '../GiftCardDetailModal'
import GiftCardDetailContentContainer from '@/containers/GiftCardDetailContentContainer'
interface IGiftCard {
  image: string
  label: string
  price: number
  packId: string
  brand: string
  selectedPacks: IPack[]
  setSelectedPacks: Dispatch<SetStateAction<IPack[]>>
  setTotal: Dispatch<SetStateAction<number>>
}

const GiftCard = ({
  image,
  label,
  price,
  packId,
  selectedPacks,
  brand,
  setTotal,
  setSelectedPacks,
}: IGiftCard) => {
  const [addHovered, setAddHovered] = useState<boolean>(false)
  const [packCount, setPackCount] = useState<number>(0)
  const {
    isOpen: isOpenCardDetail,
    onOpen: onOpenCardDetail,
    onClose: onCloseCardDetail,
  } = useDisclosure()

  useEffect(() => {
    if (selectedPacks.length === 0) {
      setPackCount(0)
    }
  }, [selectedPacks.length])

  const handleCardClick = useCallback(() => {
    if (packCount === 0 && selectedPacks.length < 5) {
      setPackCount((prev) => prev + 1)
      setSelectedPacks((prev) => [
        ...prev,
        {
          id: packId,
          imageURL: image,
          price,
          label,
        },
      ])
      setTotal((prev) => prev + price)
    }
  }, [packCount, selectedPacks.length])

  const AddPack = useCallback(() => {
    if (selectedPacks.length < 5) {
      setPackCount((prev) => prev + 1)
      setSelectedPacks((prev) => [
        ...prev,
        {
          id: packId,
          imageURL: image,
          price,
          label,
        },
      ])
      setTotal((prev: number) => prev + price)
    }
  }, [setSelectedPacks, selectedPacks])

  const RemovePack = useCallback(() => {
    if (packCount > 0) {
      const packsThatHaveThisId = selectedPacks.filter((pack) => pack.id === packId)
      packsThatHaveThisId.pop()

      const otherPacks = selectedPacks.filter((pack) => pack.id !== packId)
      const newPacks = [...otherPacks, ...packsThatHaveThisId]
      setSelectedPacks(newPacks)
      setPackCount((prev) => prev - 1)
    }
  }, [packCount, setSelectedPacks, selectedPacks])

  return (
    <Box position={'relative'} display={'inline-block'}>
      <Flex
        direction={'column'}
        gap={2}
        _hover={{ cursor: 'pointer' }}
        onMouseEnter={() => setAddHovered(true)}
        onMouseLeave={() => {
          setAddHovered(false)
        }}
      >
        {addHovered && (
          <Button
            position={'absolute'}
            top={2}
            right={2}
            bg={'#333'}
            padding={3}
            _hover={{ bg: '#222' }}
            onClick={onOpenCardDetail}
          >
            <ViewIcon width={3} height={3} />
          </Button>
        )}
        <GiftCardDetailModal isOpen={isOpenCardDetail} onClose={onCloseCardDetail}>
          <GiftCardDetailContentContainer brand={brand} price={price} />
        </GiftCardDetailModal>
        <Box>
          <Image
            src={`${image}`}
            alt={label}
            width={247}
            height={318}
            style={{ width: '100%', height: '100%' }}
          />
        </Box>

        {packCount > 0 ? (
          <Flex width={'full'} justifyContent={'space-between'} className="addRemovePack">
            <Button fontWeight={'bold'} fontSize={20} onClick={RemovePack}>
              -
            </Button>
            <Flex direction={'column'} alignItems={'center'} height={'full'}>
              <Text fontWeight={'bold'} fontSize={14}>
                {packCount}
              </Text>
              <Text fontSize={14} color={'#5a5e62'}>
                {'$' + price}
              </Text>
            </Flex>
            <Button fontWeight={'bold'} fontSize={20} onClick={AddPack}>
              +
            </Button>
          </Flex>
        ) : (
          <Button bg={'#2a292a'} color={'#eeeee8'} onClick={handleCardClick}>
            {addHovered ? 'Add Pack' : '$' + price}
          </Button>
        )}
      </Flex>
    </Box>
  )
}

export default GiftCard
