'use client'
import { useState } from 'react'
import { Flex, Box, Button, Text } from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowForwardIcon } from '@chakra-ui/icons'

interface IGiftCard {
  image: string
  label: string
  price: number
}

const GiftCard = ({ image, label, price }: IGiftCard) => {
  const [isOpen, setIsOpen] = useState(false)
  const [removeHovered, setRemoveHovered] = useState(false)
  const [addHovered, setAddHovered] = useState(false)
  const [isAddVisible, setIsAddVisible] = useState(true)
  const [isAddRemoveVisible, setIsAddRemoveVisible] = useState(false)

  const showContent = () => {
    setIsAddVisible(false)
    setIsAddRemoveVisible(true)
    setIsOpen(true)
  }

  const closeContent = () => {
    setIsAddVisible(true)
    setIsAddRemoveVisible(false)
    setIsOpen(false)
  }

  return (
    <Box>
      <Flex
        direction={'column'}
        gap={2}
        _hover={{ cursor: 'pointer' }}
        onClick={showContent}
        onMouseEnter={() => setAddHovered(true)}
        onMouseLeave={() => setAddHovered(false)}
      >
        <Box>
          <Image
            src={`${image}`}
            alt={label}
            width={247}
            height={318}
            style={{ width: '100%', height: '100%' }}
          />
        </Box>
        {isAddVisible && (
          <Button className="addPack">{addHovered ? 'Add Pack' : '$' + price}</Button>
        )}
        {isAddRemoveVisible && (
          <Flex width={'full'} justifyContent={'space-between'} className="addRemovePack">
            <Button fontWeight={'bold'} fontSize={20}>
              -
            </Button>
            <Flex direction={'column'} alignItems={'center'} height={'full'}>
              <Text fontWeight={'bold'} fontSize={14}>
                1
              </Text>
              <Text fontSize={14} color={'#5a5e62'}>
                {'$' + price}
              </Text>
            </Flex>
            <Button fontWeight={'bold'} fontSize={20}>
              +
            </Button>
          </Flex>
        )}
      </Flex>
      {isOpen && (
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
          <Flex direction={'column'} gap={2} alignItems={'center'}>
            <Box>
              <Image
                src={image}
                width={72}
                height={132}
                alt={label}
                style={{ width: 'auto', height: 'auto' }}
              />
            </Box>
            <Button
              bg={'transparent'}
              _hover={{ bg: '#2a292a' }}
              width={'full'}
              onMouseEnter={() => setRemoveHovered(true)}
              onMouseLeave={() => setRemoveHovered(false)}
            >
              {removeHovered ? 'Remove' : '$' + price}
            </Button>
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
                  <Text fontWeight={'bold'}>1</Text>
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
                <Text fontWeight={'bold'}>$5168.99</Text>
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
              <Button bg={'transparent'} height={12} onClick={closeContent}>
                Cancel
              </Button>
            </Flex>
          </Flex>
        </Flex>
      )}
    </Box>
  )
}

export default GiftCard
