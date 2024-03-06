import { Grid, GridItem, Flex, Button } from '@chakra-ui/react'
import AffiliateCard from '@/components/AffiliateCard'
import { AFFILIATECARDS } from '@/constants/mock'
const AffiliateCardContainer = () => {
  return (
    <Flex width={'full'} direction={'column'} gap={6}>
      <Flex gap={3} justifyContent={'end'}>
        <Button>Affiliate Link</Button>
        <Button>
          {AFFILIATECARDS[3].prefixSymbol + AFFILIATECARDS[3].value.toString()}
        </Button>
      </Flex>
      <Grid width={'full'} templateColumns="repeat(4, 1fr)" rowGap={4} columnGap={8}>
        {AFFILIATECARDS.map((affiliateCard, index) => (
          <GridItem
            colSpan={2}
            key={affiliateCard.color + affiliateCard.label + affiliateCard.value + index}
          >
            <AffiliateCard
              label={affiliateCard.label}
              color={affiliateCard.color}
              value={affiliateCard.value}
              prefixSymbol={affiliateCard.prefixSymbol}
            />
          </GridItem>
        ))}
      </Grid>
    </Flex>
  )
}

export default AffiliateCardContainer
