'use client'

import { useEffect, useState } from 'react'
import { Grid, GridItem, Box } from '@chakra-ui/react'

import { GIFT_CARDS } from '@/constants/mock'
import GiftCard from '@/components/GiftCard'
import PackInfoWidget from '@/components/PackInfoWidget'
import { IPack } from '@/types/pack'

const GiftCardContainer = () => {
  const [total, setTotal] = useState<number>(0)
  const [selectedPacks, setSelectedPacks] = useState<IPack[]>([])

  useEffect(() => {
    if (selectedPacks.length === 0) setTotal(0)
  })

  return (
    <Box>
      <Grid
        width="full"
        templateColumns="repeat(12, 1fr)"
        rowGap={4}
        columnGap={3}
        mb={8}
      >
        {GIFT_CARDS.map((giftCard, index) => {
          return (
            <GridItem
              colSpan={{ base: 6, md: 4, lg: 3 }}
              overflow="none"
              borderRadius={1}
              key={giftCard.label + index}
            >
              <GiftCard
                image={giftCard.image}
                label={giftCard.label}
                price={giftCard.price}
                packId={giftCard.giftCardId}
                brand={giftCard.brand}
                selectedPacks={selectedPacks}
                setSelectedPacks={setSelectedPacks}
                setTotal={setTotal}
              />
            </GridItem>
          )
        })}
      </Grid>
      {selectedPacks.length > 0 ? (
        <PackInfoWidget
          total={total}
          setTotal={setTotal}
          selectedPacks={selectedPacks}
          setSelectedPacks={setSelectedPacks}
        />
      ) : null}
    </Box>
  )
}

export default GiftCardContainer
