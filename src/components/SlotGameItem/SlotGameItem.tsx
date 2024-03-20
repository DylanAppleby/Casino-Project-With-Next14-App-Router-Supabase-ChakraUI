import { Flex, Text, Box, Image, Stack } from '@chakra-ui/react'
interface ISlotGameItem {
  percentage: string
  collection: string
  brand: string
  imageUrl: string
  price: number
}
const SlotGameItem = ({
  percentage,
  collection,
  brand,
  imageUrl,
  price,
}: ISlotGameItem) => {
  return (
    <Flex direction={'column'} bg={'#201f20'} rounded={10} pt={4} pb={3} gap={2}>
      <Flex direction={'column'} alignItems={'center'}>
        <Text
          color={'#57544f'}
          fontWeight={'bold'}
          fontSize={{ base: 12, md: 14, lg: 18 }}
        >
          {percentage}
        </Text>
        <Box>
          <Image src={imageUrl} width={'160px'} height={'200px'} />
        </Box>
        <Stack
          whiteSpace={'nowrap'}
          overflow={'hidden'}
          textOverflow={'ellipsis'}
          width={'80%'}
          marginX={'auto'}
        >
          <Text
            color={'#fafafa'}
            fontWeight={'bold'}
            fontSize={{ base: 14, md: 16, lg: 20 }}
          >
            {collection}
          </Text>
        </Stack>
        <Text
          color={'#7a7979'}
          fontWeight={'bold'}
          fontSize={{ base: 14, md: 16, lg: 20 }}
        >
          {brand}
        </Text>
      </Flex>
      <Flex direction={'row-reverse'} pr={3}>
        <Box
          bg={'#393839'}
          fontSize={{ base: 14, md: 16, lg: 20 }}
          fontWeight={'bold'}
          px={3}
          py={1}
          borderRadius={1}
          borderBottomRightRadius={8}
        >
          ${price.toLocaleString('us').toString()}
        </Box>
      </Flex>
    </Flex>
  )
}

export default SlotGameItem
