'use client'
import { Flex, Text, Box, Button } from '@chakra-ui/react'
import Image from 'next/image'
const BattleHistory = () => {
  return (
    <Flex
      borderWidth={2}
      borderRadius={8}
      pr={6}
      alignItems={'center'}
      justifyContent={'space-between'}
    >
      <Flex direction={'column'} gap={1} alignItems={'center'} px={6} py={4}>
        <Text fontSize={14}>5 Rounds</Text>
        <Flex gap={3}>
          <Box width={9} height={9} bgColor="#f6c043" borderRadius="full" />
          <Box width={9} height={9} bgColor="#f6c043" borderRadius="full" />
          <Box width={9} height={9} bgColor="#f6c043" borderRadius="full" />
          <Box width={9} height={9} bgColor="#f6c043" borderRadius="full" />
        </Flex>
        <Text fontSize={14}>$8.48</Text>
      </Flex>
      <Flex gap={3} bgColor={'#1f263b'} width={'full'} mr={4} rounded={8} p={4}>
        <Image
          src={'/assets/images/giftcard/giftcard1.webp'}
          alt={'giftcard'}
          width={35}
          height={8}
          style={{ width: 'auto', height: 'auto' }}
        />
        <Image
          src={'/assets/images/giftcard/giftcard2.webp'}
          alt={'giftcard'}
          width={35}
          height={8}
          style={{ width: 'auto', height: 'auto' }}
        />
        <Image
          src={'/assets/images/giftcard/giftcard3.webp'}
          alt={'giftcard'}
          width={35}
          height={8}
          style={{ width: 'auto', height: 'auto' }}
        />
        <Image
          src={'/assets/images/giftcard/giftcard1.webp'}
          alt={'giftcard'}
          width={35}
          height={8}
          style={{ width: 'auto', height: 'auto' }}
        />
        <Image
          src={'/assets/images/giftcard/giftcard2.webp'}
          alt={'giftcard'}
          width={35}
          height={8}
          style={{ width: 'auto', height: 'auto' }}
        />
      </Flex>
      <Button px={9}>View Results</Button>
    </Flex>
  )
}

export default BattleHistory
