import { Grid, GridItem, Flex, Text } from '@chakra-ui/react'
import GiftCardDetailContent from '@/components/GiftCardDetailContent'
import { GIFT_CARD_DETAILS } from '@/constants/mock'
interface IGiftCardDetailContentContainer {
  price: number
  brand: string
}
const GiftCardDetailContentContainer = ({
  price,
  brand,
}: IGiftCardDetailContentContainer) => {
  return (
    <Flex direction={'column'} alignItems={'center'} gap={6}>
      <Text fontWeight={'bold'} fontSize={'20px'}>
        {brand + ' - $' + price.toLocaleString('us').toString()}
      </Text>
      <Grid
        width="full"
        templateColumns="repeat(12, 1fr)"
        rowGap={{ base: 4, md: 6 }}
        columnGap={{ base: 2, md: 4 }}
        mb={8}
      >
        {GIFT_CARD_DETAILS.map((giftCardDetail, index) => {
          return (
            <GridItem
              colSpan={{ base: 6, md: 4, lg: 3 }}
              overflow="none"
              borderRadius={1}
              key={giftCardDetail.imageUrl + index}
            >
              <GiftCardDetailContent
                percentage={giftCardDetail.percentage}
                imageUrl={giftCardDetail.imageUrl}
                collection={giftCardDetail.collection}
                price={giftCardDetail.price}
              />
            </GridItem>
          )
        })}
      </Grid>
    </Flex>
  )
}

export default GiftCardDetailContentContainer
