import Image from 'next/image'

import { Box, Flex } from '@chakra-ui/react'

import { CardType } from '@/types/battleCard'

interface IBattleCardVoucher {
  imageUrl: string
  percentage?: number
  cardType: CardType
  price: number
}

const BattleCardVoucher = ({
  imageUrl,
  percentage = 0,
  cardType,
  price,
}: IBattleCardVoucher) => {
  return (
    <Flex
      direction="column"
      alignItems="center"
      justifyContent="center"
      gap={3}
      width="full"
      height="full"
      bgColor="#e2e8f029"
      rounded="0.375rem"
      px={4}
      py={6}
    >
      <Box fontWeight="medium" height={6} width="full" textAlign="center">
        {percentage > 0 ? `${percentage?.toFixed(4)}%` : ''}
      </Box>
      <Flex position="relative" alignItems="center" justifyContent="center">
        <Box position="relative" zIndex={2}>
          <Image src={imageUrl} alt={`${cardType} card`} width={90} height={80} />
        </Box>
        <Box position="absolute" width={5} height={5} boxShadow={'0 0 50px yellow'} />
      </Flex>
      <Flex direction="column">
        <Box fontWeight="medium" fontSize="medium">
          {cardType === CardType.VOUCHER ? 'Voucher' : 'Default'}
        </Box>
        <Box
          textColor={'#999'}
          textAlign="center"
          lineHeight={1}
        >{`$${price.toFixed(2)}`}</Box>
      </Flex>
    </Flex>
  )
}

export default BattleCardVoucher
