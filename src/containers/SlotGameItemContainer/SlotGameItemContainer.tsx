import { Flex, Grid, GridItem, Text } from '@chakra-ui/react'
import SlotGameItem from '@/components/SlotGameItem'
import { SLOT_GAME_ITEMS } from '@/constants/mock'
const RecommendedBoxContainer = () => {
  return (
    <Flex direction={'column'} width={'full'} gap={8}>
      <Text
        fontSize={{ base: 24, md: 28, lg: 32 }}
        fontWeight={'bold'}
        whiteSpace={'nowrap'}
      >
        Items in this box
      </Text>
      <Grid
        width="full"
        templateColumns="repeat(30, 1fr)"
        rowGap={{ base: 4, md: 6 }}
        columnGap={{ base: 2, md: 4 }}
        mb={8}
      >
        {SLOT_GAME_ITEMS.map((slotGameItem, index) => {
          return (
            <GridItem
              colSpan={{ base: 15, md: 10, lg: 6 }}
              overflow="none"
              borderRadius={1}
              key={slotGameItem.imageUrl + index}
            >
              <SlotGameItem
                percentage={slotGameItem.percentage}
                imageUrl={slotGameItem.imageUrl}
                collection={slotGameItem.collection}
                brand={slotGameItem.brand}
                price={slotGameItem.price}
              />
            </GridItem>
          )
        })}
      </Grid>
    </Flex>
  )
}

export default RecommendedBoxContainer
