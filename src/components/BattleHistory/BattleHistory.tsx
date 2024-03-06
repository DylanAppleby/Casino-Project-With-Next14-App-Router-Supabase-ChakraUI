'use client'
import { Flex, Text, Box, Button } from '@chakra-ui/react'
import Image from 'next/image'
const BattleHistory = () => {
  return (
    <Flex
      borderWidth={2}
      borderRadius={8}
      gap={{ base: 3, lg: 4 }}
      alignItems={'center'}
      justifyContent={'space-between'}
      px={6}
      pb={{ base: 6, md: 6, lg: 0 }}
      direction={{ base: 'column', md: 'column', lg: 'row' }}
    >
      <Flex
        direction={'column'}
        gap={1}
        alignItems={'center'}
        py={{ base: 3, lg: 4 }}
        pr={2}
      >
        <Text fontSize={14}>5 Rounds</Text>
        <Flex gap={3}>
          <Box width={9} height={9} bgColor="#f6c043" borderRadius="full" />
          <Box width={9} height={9} bgColor="#f6c043" borderRadius="full" />
          <Box width={9} height={9} bgColor="#f6c043" borderRadius="full" />
          <Box width={9} height={9} bgColor="#f6c043" borderRadius="full" />
        </Flex>
        <Text fontSize={14}>$8.48</Text>
      </Flex>
      <Flex
        gap={3}
        bgColor="#1e1d1e"
        width={'full'}
        rounded={8}
        justifyContent={{ base: 'center', lg: 'start' }}
        p={4}
      >
        <Box>
          <Image
            src={'/assets/images/giftcard/giftcard1.webp'}
            alt={'giftcard'}
            width={35}
            height={8}
            style={{ width: 'auto', height: 'auto' }}
          />
        </Box>
        <Box>
          <Image
            src={'/assets/images/giftcard/giftcard2.webp'}
            alt={'giftcard'}
            width={35}
            height={8}
            style={{ width: 'auto', height: 'auto' }}
          />
        </Box>
        <Box>
          <Image
            src={'/assets/images/giftcard/giftcard3.webp'}
            alt={'giftcard'}
            width={35}
            height={8}
            style={{ width: 'auto', height: 'auto' }}
          />
        </Box>
        <Box>
          <Image
            src={'/assets/images/giftcard/giftcard1.webp'}
            alt={'giftcard'}
            width={35}
            height={8}
            style={{ width: 'auto', height: 'auto' }}
          />
        </Box>
        <Box>
          <Image
            src={'/assets/images/giftcard/giftcard2.webp'}
            alt={'giftcard'}
            width={35}
            height={8}
            style={{ width: 'auto', height: 'auto' }}
          />
        </Box>
      </Flex>
      <Button px={9}>View Results</Button>
    </Flex>
  )
}

export default BattleHistory
