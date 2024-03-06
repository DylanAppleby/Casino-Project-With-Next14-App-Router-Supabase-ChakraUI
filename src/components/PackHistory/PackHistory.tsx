import { Flex, Text, Box } from '@chakra-ui/react'
import Image from 'next/image'
interface IPackHistory {
  header: string
  cardName: string
  amountUSD: string
  cardStatus: string
  cardImage: string
  presentImage: string
}
const PackHistory = ({
  header,
  cardName,
  amountUSD,
  cardStatus,
  cardImage,
  presentImage,
}: IPackHistory) => {
  return (
    <Flex direction={'column'} borderWidth={2} borderRadius={6}>
      <Flex
        justifyContent={'space-between'}
        borderBottomWidth={2}
        alignItems={'center'}
        p={3}
      >
        <Flex gap={2} alignItems={'center'}>
          <Text whiteSpace={'nowrap'}>
            Value USD:{' '}
            <Text as={'span'} color={'#6dc898'}>
              {header}
            </Text>
          </Text>
        </Flex>
        <Text whiteSpace={'nowrap'}>02-07-2024 09:04</Text>
      </Flex>
      <Flex justifyContent={'space-between'} alignItems={'center'}>
        <Flex gap={3} p={6}>
          <Box>
            <Image
              src={cardImage}
              width={44}
              height={22}
              alt={'card'}
              style={{ width: '55px', height: '70px' }}
            />
          </Box>
          <Flex direction={'column'} gap={1} justifyContent={'center'}>
            <Text>{cardName}</Text>
            <Text>{amountUSD}</Text>
          </Flex>
        </Flex>
        <Flex direction={'column'} p={6} alignItems={'center'}>
          <Text>{cardStatus}</Text>
          <Box>
            <Image
              src={presentImage}
              width={44}
              height={22}
              alt={'card'}
              style={{ width: '44px', height: '44px' }}
            />
          </Box>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default PackHistory
