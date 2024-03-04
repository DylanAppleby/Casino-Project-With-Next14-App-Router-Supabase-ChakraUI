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
      rounded={16}
      width={{ base: '20.5rem', lg: 'full' }}
      minWidth={{ base: '20.5rem', lg: '0rem' }}
      maxWidth={'20.5rem'}
      bg={useColorModeValue('yellow.300', 'yellow.500')}
      padding={1.5}
    >
      <Flex px={3} gap={1} py={2} alignItems={'center'}>
        <Box mb={1}>
          <Image
            src="/assets/images/crown.webp"
            alt="crown icon"
            width={18}
            height={18}
            style={{ width: 'auto', height: 'auto' }}
          />
        </Box>
        <Text color={'#01000d'} fontWeight={'bold'} fontSize={18}>
          {label}
        </Text>
      </Flex>
      <Flex
        direction="column"
        rounded={12}
        bg={'#151618'}
        px={8}
        pb={6}
        pt={4}
        gap={1}
        height="full"
      >
        <Text fontSize={20} fontWeight={'bold'}>
          {header}
        </Text>
        <Text fontSize={12}>{content}</Text>
      </Flex>
    </Flex>
  )
}

export default FunctionCard
