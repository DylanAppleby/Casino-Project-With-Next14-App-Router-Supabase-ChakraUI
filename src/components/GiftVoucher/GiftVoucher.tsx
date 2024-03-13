'use client'
import Image from 'next/image'
import { Box, Flex, Text } from '@chakra-ui/react'

interface IGiftVoucher {
  image: string
  labelHeader: string
  labelContent: string
  price: string
}
const GiftVoucher = ({ image, labelHeader, labelContent, price }: IGiftVoucher) => {
  return (
    <Flex
      bg={'#313030'}
      borderRadius={15}
      width="full"
      px={5}
      pt={6}
      pb={7}
      justify="space-between"
    >
      <Flex gap={2}>
        <Box>
          <Image
            src={`${image}`}
            alt={labelHeader}
            width={40}
            height={40}
            style={{ width: '100%', height: 'auto' }}
          />
        </Box>
        <Flex direction="column" alignItems="space-around">
          <Text>{labelHeader}</Text>
          <Text>{labelContent}</Text>
        </Flex>
      </Flex>
      <Box>
        <Text>{'$' + Number(price).toLocaleString('us').toString()}</Text>
      </Box>
    </Flex>
  )
}

export default GiftVoucher
