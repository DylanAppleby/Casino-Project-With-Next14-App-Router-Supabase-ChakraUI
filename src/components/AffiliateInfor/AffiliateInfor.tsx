'use client'
import { Flex, Box, Text } from '@chakra-ui/react'

interface IAffiliateInfor {
  user: string
  deposited: string
  opened: string
  commision: string
}
const AffiliateInfor = ({ user, deposited, opened, commision }: IAffiliateInfor) => {
  return (
    <Flex
      justifyContent={'space-between'}
      py={3}
      pl={3}
      pr={9}
      width={'full'}
      borderWidth={2}
      alignItems={'center'}
      rounded={6}
    >
      <Flex alignItems={'center'} gap={2}>
        <Box
          width={9}
          height={9}
          borderRadius="full"
          borderWidth={2}
          borderColor={'#f6c043'}
        />
        <Text color="#6a686a" fontSize={{ base: '12', md: '14', lg: '16' }}>
          {user}
        </Text>
      </Flex>
      <Text fontSize={{ base: '12', md: '14', lg: '16' }}>{deposited}</Text>
      <Text fontSize={{ base: '12', md: '14', lg: '16' }}>{opened}</Text>
      <Text
        color={'#6dc898'}
        whiteSpace={'nowrap'}
        fontSize={{ base: '12', md: '14', lg: '16' }}
      >
        {commision}
      </Text>
    </Flex>
  )
}

export default AffiliateInfor
