import { Grid, GridItem, Flex, Text } from '@chakra-ui/react'
import GiftCardDetailContent from '@/components/GiftCardDetailContent'
import { GIFT_CARD_DETAILS } from '@/constants/mock'
interface IGiftCardDetailContentContainer {
  price: number
  name: string
  items: any
}
const GiftCardDetailContentContainer = ({
  price,
  name,
  items,
}: IGiftCardDetailContentContainer) => {
  return (
    <Flex direction={'column'} alignItems={'center'} gap={6}>
      <Text fontWeight={'bold'} fontSize={'20px'}>
        {name + ' - $' + price.toLocaleString('us').toString()}
      </Text>
      <Grid
        width="full"
        templateColumns="repeat(12, 1fr)"
        rowGap={{ base: 4, md: 6 }}
        columnGap={{ base: 2, md: 4 }}
        mb={8}
      >
        {items.map((giftCardDetail: any, index: number) => {
          return (
            <GridItem
              colSpan={{ base: 6, md: 4, lg: 3 }}
              overflow="none"
              borderRadius={1}
              key={index}
            >
              <GiftCardDetailContent
                percentage={giftCardDetail.rate}
                imageUrl={giftCardDetail.pack_item.image_url}
                collection={giftCardDetail.pack_item.name}
                price={giftCardDetail.pack_item.price}
              />
            </GridItem>
          )
        })}
      </Grid>
    </Flex>
  )
}

export default GiftCardDetailContentContainer
