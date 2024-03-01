import { Grid, GridItem } from '@chakra-ui/react'

import { GIFT_CARDS } from '@/constants/mock'
import GiftCard from '../../GiftCard'

const GiftCardContainer = () => {
  return (
    <Grid
      width="full"
      templateColumns="repeat(12, 1fr)"
      rowGap={4}
      columnGap={3}
      mb={8}
      minHeight={1000}
    >
      {GIFT_CARDS.map((giftCard, index) => {
        return (
          <GridItem colSpan={{ base: 6, md: 4, lg: 3 }} overflow="none" borderRadius={1}>
            <GiftCard
              key={giftCard.label + index}
              image={giftCard.image}
              label={giftCard.label}
            />
          </GridItem>
        )
      })}
    </Grid>
  )
}

export default GiftCardContainer
