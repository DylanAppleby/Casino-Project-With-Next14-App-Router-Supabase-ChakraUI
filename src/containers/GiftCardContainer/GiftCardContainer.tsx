'use client'

import { useEffect, useState } from 'react'
import { Grid, GridItem, Box } from '@chakra-ui/react'

import { GIFT_CARDS } from '@/constants/mock'
import GiftCard from '@/components/GiftCard'
import PackInfoWidget from '@/components/PackInfoWidget'
import { IPack } from '@/types/pack'
import { useSupabase } from '@/contexts/supabase-provider'

const GiftCardContainer = () => {
  const [total, setTotal] = useState<number>(0)
  const [packs, setPacks] = useState<any>([])
  const [selectedPacks, setSelectedPacks] = useState<IPack[]>([])
  const supabase = useSupabase()

  useEffect(() => {
    if (selectedPacks.length === 0) setTotal(0)
    getPacks()
  })
  console.log('this is data:', packs)
  const getPacks = async () => {
    const { data, error } = await supabase.from('pack').select()
    if (error) console.log('this is error:', error.message)
    else setPacks(data)
  }

  return (
    <Box>
      <Grid
        width="full"
        templateColumns="repeat(12, 1fr)"
        rowGap={4}
        columnGap={3}
        mb={8}
      >
        {packs.map((giftCard: any, index: number) => {
          return (
            <GridItem
              colSpan={{ base: 6, md: 4, lg: 3 }}
              overflow="none"
              borderRadius={1}
              key={index}
            >
              <GiftCard
                image={giftCard.image_url}
                label={giftCard.description}
                price={giftCard.open_price}
                packId={giftCard.id}
                name={giftCard.name}
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
