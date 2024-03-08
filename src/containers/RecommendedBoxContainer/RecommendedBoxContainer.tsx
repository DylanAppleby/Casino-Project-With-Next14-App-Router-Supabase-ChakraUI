import { Flex, Grid, GridItem, Text } from '@chakra-ui/react'
import RecommendedBox from '@/components/RecommendedBox'
import { RECOMMNEDED_BOXS } from '@/constants/mock'
const RecommendedBoxContainer = () => {
  return (
    <Flex direction={'column'} width={'full'} gap={8}>
      <Text
        fontSize={{ base: 24, md: 28, lg: 32 }}
        fontWeight={'bold'}
        whiteSpace={'nowrap'}
      >
        Recommended Boxes
      </Text>
      <Grid
        width="full"
        templateColumns="repeat(30, 1fr)"
        rowGap={{ base: 4, md: 6 }}
        columnGap={{ base: 2, md: 4 }}
        mb={8}
      >
        {RECOMMNEDED_BOXS.map((recommendedBox, index) => {
          return (
            <GridItem
              colSpan={{ base: 15, md: 10, lg: 6 }}
              overflow="none"
              borderRadius={1}
              key={recommendedBox.label + index}
            >
              <RecommendedBox image={recommendedBox.image} label={recommendedBox.label} />
            </GridItem>
          )
        })}
      </Grid>
    </Flex>
  )
}

export default RecommendedBoxContainer
