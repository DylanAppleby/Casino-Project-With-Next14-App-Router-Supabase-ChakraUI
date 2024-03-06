import { Flex, Text } from '@chakra-ui/react'
import Image from 'next/image'
interface ICrypto {
  header: string
  transactionID: string
  amountUSD: string
  status: string
  image: string
}
const Crypto = ({ header, transactionID, amountUSD, status, image }: ICrypto) => {
  return (
    <Flex direction={'column'} borderWidth={2} borderRadius={6}>
      <Flex
        justifyContent={'space-between'}
        borderBottomWidth={2}
        alignItems={'center'}
        p={3}
      >
        <Flex gap={2} alignItems={'center'}>
          <Flex>
            <Image
              src={image}
              width={22}
              height={11}
              alt={'cryptoicon'}
              style={{ width: '22px', height: '22px' }}
            />
          </Flex>
          <Text whiteSpace={'nowrap'}>{header}</Text>
        </Flex>
        <Text whiteSpace={'nowrap'}>02-07-2024 09:04</Text>
      </Flex>
      <Flex gap={3} p={6}>
        <Flex direction={'column'} gap={3}>
          <Text whiteSpace={'nowrap'}>Transaction ID:</Text>
          <Text whiteSpace={'nowrap'}>Amount USD:</Text>
          <Text whiteSpace={'nowrap'}>Satus:</Text>
        </Flex>
        <Flex direction={'column'} gap={3}>
          <Text whiteSpace={'nowrap'}>{transactionID}</Text>
          <Text whiteSpace={'nowrap'}>{amountUSD}</Text>
          <Text whiteSpace={'nowrap'} color={'#6dc898'}>
            {status}
          </Text>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default Crypto
