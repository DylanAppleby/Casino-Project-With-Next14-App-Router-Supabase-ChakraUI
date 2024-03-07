'use client'
import Image from 'next/image'
import { Flex, Box, Text, useColorModeValue } from '@chakra-ui/react'

interface IGiftCard {
  label: string
  header: string
  content: string
}
const FunctionCard = ({ label, header, content }: IGiftCard) => {
  return (
    <Flex
      direction="column"
      rounded={14}
      width={{ base: '20.5rem', lg: 'full' }}
      minWidth={{ base: '20.5rem', lg: '0rem' }}
      maxWidth={'20.5rem'}
      bg={useColorModeValue('yellow.300', 'yellow.500')}
      px={1}
      pb={1}
    >
      <Flex px={3} gap={1} py={2} alignItems={'center'}>
        <Box mb={1}>
          <Image
            src="/assets/images/crown.webp"
            alt="crown icon"
            width={16}
            height={16}
            style={{ width: '100%', height: '100%' }}
          />
        </Box>
        <Text color={'#01000d'} fontWeight={'bold'} fontSize={16}>
          {label}
        </Text>
      </Flex>
      <Flex
        direction="column"
        rounded={11}
        bg={'#151618'}
        px={4}
        pb={4}
        pt={4}
        height="full"
        gap={2}
      >
        <Text fontSize={18} fontWeight={'bold'}>
          {header}
        </Text>
        <Text fontSize={11} color={'#969ca6'} fontWeight={'bold'}>
          {content}
        </Text>
      </Flex>
    </Flex>
  )
}

export default FunctionCard
