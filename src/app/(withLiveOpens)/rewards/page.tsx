import { Flex, Grid, GridItem, Text } from '@/components/ChakraUIComponents'
import LevelCard from '@/components/LevelCard'
import { LEVEL_CARDS } from '@/constants/mock'
const Rewards = () => {
  return (
    <Flex direction={'column'}>
      <Text fontSize={32} fontWeight={'bold'} my={'30px'}>
        Free Packs
      </Text>
      <Grid
        width="full"
        templateColumns="repeat(12, 1fr)"
        rowGap={4}
        columnGap={3}
        mb={8}
      >
        {LEVEL_CARDS.map((levelCard, index) => {
          return (
            <GridItem
              colSpan={{ base: 6, md: 4, lg: 3 }}
              overflow="none"
              borderRadius={1}
              key={levelCard.label + index}
            >
              <LevelCard
                image={levelCard.image}
                label={levelCard.label}
                caption={levelCard.caption}
              />
            </GridItem>
          )
        })}
      </Grid>
    </Flex>
  )
}

export default Rewards
