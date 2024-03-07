'use client'
import Image from 'next/image'
import { Flex, Box, Text } from '@chakra-ui/react'
import { LockIcon } from '@chakra-ui/icons'

interface ILevelCard {
  image: string
  label: string
  caption: string
}

const LevelCard = ({ image, label, caption }: ILevelCard) => {
  return (
    <Flex direction={'column'} gap={3}>
      <Box>
        <Image
          src={`${image}`}
          alt={label}
          width={247}
          height={318}
          style={{ width: '100%', height: 'auto' }}
        />
      </Box>
      <Flex gap={2} justifyContent={'center'} alignItems={'center'}>
        <LockIcon />
        <Text fontWeight={'bold'}>{caption}</Text>
      </Flex>
    </Flex>
  )
}

export default LevelCard
