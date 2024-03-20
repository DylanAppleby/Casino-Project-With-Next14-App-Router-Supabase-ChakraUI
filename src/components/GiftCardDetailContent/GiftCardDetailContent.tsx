import { Flex, Text, Box, Image, Stack } from '@chakra-ui/react'
interface IGiftCardDetailContent {
  percentage: string
  collection: string
  imageUrl: string
  price: number
}
const GiftCardDetailContent = ({
  percentage,
  collection,
  imageUrl,
  price,
}: IGiftCardDetailContent) => {
  return (
    <Flex direction={'column'} bg={'#1f2428'} rounded={10} pt={4} pb={3} gap={2}>
      <Flex direction={'column'} alignItems={'center'}>
        <Text color={'#e7e7e7'} fontWeight={'bold'} fontSize={'12px'}>
          {percentage}%
        </Text>
        <Box>
          <Image src={imageUrl} width={'120px'} height={'160px'} />
        </Box>
        <Stack
          width={'80%'}
          marginX={'auto'}
          whiteSpace={'nowrap'}
          overflow={'hidden'}
          textOverflow={'ellipsis'}
          textAlign={'center'}
        >
          <Text color={'#FFFFFEB'} fontWeight={'bold'} fontSize={14}>
            {collection}
          </Text>
        </Stack>
        <Box fontSize={14} fontWeight={'bold'} px={3} py={1} color={'#5A5E62'}>
          ${price.toLocaleString('us').toString()}
        </Box>
      </Flex>
    </Flex>
  )
}

export default GiftCardDetailContent
