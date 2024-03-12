import { Flex, Text, Image, Box } from '@chakra-ui/react'
interface ISales {
  header: string
  product: string
  brand: string
  amountUSD: string
}
const Sales = ({ header, product, brand, amountUSD }: ISales) => {
  return (
    <Flex direction={'column'} borderWidth={2} borderRadius={6}>
      <Flex
        justifyContent={'space-between'}
        borderBottomWidth={2}
        alignItems={'center'}
        p={5}
      >
        <Flex gap={2} alignItems={'center'}>
          <Flex>Voucher</Flex>
          <Text whiteSpace={'nowrap'}>{header}</Text>
        </Flex>
        <Text whiteSpace={'nowrap'}>02-07-2024 09:04</Text>
      </Flex>
      <Flex gap={3} p={6} justifyContent={'space-between'} alignItems={'center'}>
        <Flex gap={5}>
          <Flex direction={'column'} gap={3}>
            <Text whiteSpace={'nowrap'}>Product:</Text>
            <Text whiteSpace={'nowrap'}>Brand:</Text>
            <Text whiteSpace={'nowrap'}>AmountUSD:</Text>
          </Flex>
          <Flex direction={'column'} gap={3}>
            <Text whiteSpace={'nowrap'}>{product}</Text>
            <Text whiteSpace={'nowrap'}>{brand}</Text>
            <Text whiteSpace={'nowrap'}>{amountUSD}</Text>
          </Flex>
        </Flex>
        <Flex gap={3}>
          <Image
            src={'/assets/images/cryptoicon/blackmoney.webp'}
            alt=""
            width={'10rem'}
            borderRadius={'11px'}
            display={{ base: 'none', lg: 'block' }}
          />
        </Flex>
      </Flex>
    </Flex>
  )
}

export default Sales
