import { Flex, Grid, GridItem } from '@chakra-ui/react'

import {
  BATTLE_CARDS,
  BATTLE_CARDS_BIG,
  BATTLE_CARDS_MONEY_PIC_DOWN,
  BATTLE_CARDS_PIC,
} from '@/constants/mock'
import BattleCard from '@/components/BattleCard'
import BattleCardBig from '@/components/BattleCard/BattleCardBig'
import BattleCardPic from '@/components/BattleCard/BattleCardPic'
import BattleCardVoucher from '@/components/BattleCard/BattleCardVoucher'

const BattleCardContainer = () => {
  return (
    <Grid
      templateColumns={{ base: 'repeat(3, 1fr)', lg: 'repeat(4, 1fr)' }}
      gap={4}
      marginY={10}
    >
      <GridItem>
        <Grid
          templateRows={'repeat(3, 1fr)'}
          templateColumns="repeat(1, 1fr)"
          gap={2}
          height="full"
        >
          {BATTLE_CARDS_BIG.map((battleCard, index) => {
            return (
              <GridItem key={battleCard.label + index}>
                <BattleCardBig index={index + 1} />
              </GridItem>
            )
          })}
        </Grid>
      </GridItem>
      <GridItem>
        <Grid templateColumns="repeat(2, 1fr)" gap={2} height="full">
          {BATTLE_CARDS.map((battleCard, index) => {
            return (
              <GridItem key={battleCard.label + index}>
                <BattleCard index={index + 1} />
              </GridItem>
            )
          })}
        </Grid>
      </GridItem>
      <GridItem>
        <Grid templateColumns={'repeat(2, 1fr)'} gap={2} height="full">
          <Flex direction="column" rowGap={2}>
            {BATTLE_CARDS_MONEY_PIC_DOWN.map((battleCard, index: number) => {
              return (
                <BattleCardVoucher key={battleCard.imageUrl + index} {...battleCard} />
              )
            })}
          </Flex>
          <Flex direction="column" rowGap={2}>
            {BATTLE_CARDS_PIC.map((battleCard, index: number) => {
              return <BattleCardPic key={battleCard.imageUrl + index} {...battleCard} />
            })}
          </Flex>
        </Grid>
      </GridItem>
      <GridItem>
        <Grid templateColumns="repeat(2, 1fr)" gap={2} height="full">
          {BATTLE_CARDS.map((battleCard, index) => {
            return (
              <GridItem key={battleCard.label + index}>
                <BattleCard index={index + 1} />
              </GridItem>
            )
          })}
        </Grid>
      </GridItem>
    </Grid>
  )
}

export default BattleCardContainer
