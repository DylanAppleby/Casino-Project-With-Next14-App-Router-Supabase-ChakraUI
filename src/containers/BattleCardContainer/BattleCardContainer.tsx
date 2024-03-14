import { Flex, Grid, GridItem, Avatar, Box } from '@chakra-ui/react'
import Image from 'next/image'

import {
  BattleDetailCard,
  BattleDetailCardBig,
  BattleDetailCardPic,
  BattleDetailCardVoucher,
} from '@/components/BattleDetail'

import {
  BATTLE_CARDS,
  BATTLE_CARDS_BIG,
  BATTLE_CARDS_MONEY_PIC_DOWN,
  BATTLE_CARDS_PIC,
} from '@/constants/mock'

const BattleCardContainer = () => {
  return (
    <Flex
      gap={{ base: 4, lg: 0 }}
      marginY={10}
      width={'full'}
      justifyContent={'space-between'}
      direction={{ base: 'column', md: 'row' }}
    >
      <Flex direction={'column'} width={'full'} gap={5}>
        <Flex
          direction="row"
          textAlign="center"
          justifyContent="center"
          alignItems="center"
          width="full"
          whiteSpace="nowrap"
        >
          <Avatar
            size="lg"
            name="code_jaek"
            src="/assets/images/battles/avatar1.webp"
            padding={2}
          />
          code_jaek
        </Flex>
        <Grid
          templateRows={'repeat(3, 1fr)'}
          templateColumns="repeat(1, 1fr)"
          gap={2}
          width="full"
          height="full"
        >
          {BATTLE_CARDS_BIG.map((battleCard, index) => {
            return (
              <GridItem key={battleCard.label + index}>
                <BattleDetailCardBig index={index + 1} />
              </GridItem>
            )
          })}
        </Grid>
      </Flex>
      <Box minWidth={4} marginY={'25px'} display={{ base: 'none', lg: 'block' }}>
        <Image src="/assets/images/battles/vs.webp" alt="versus" width={16} height={16} />
      </Box>
      <Flex direction={'column'} width={'full'} gap={5}>
        <Flex
          direction="row"
          textAlign="center"
          justifyContent="center"
          alignItems="center"
          width="full"
          whiteSpace="nowrap"
        >
          <Avatar
            size="lg"
            name="code_jaek"
            src="/assets/images/battles/avatar2.webp"
            padding={2}
          />
          Pack Bot 5
        </Flex>
        <Grid templateColumns="repeat(2, 1fr)" gap={2} height="full">
          {BATTLE_CARDS.map((battleCard, index) => {
            return (
              <GridItem key={battleCard.label + index}>
                <BattleDetailCard index={index + 1} />
              </GridItem>
            )
          })}
        </Grid>
      </Flex>
      <Box minWidth={4} marginY={'25px'} display={{ base: 'none', lg: 'block' }}>
        <Image src="/assets/images/battles/vs.webp" alt="versus" width={16} height={16} />
      </Box>
      <Flex direction={'column'} width={'full'} gap={5}>
        <Flex
          direction="row"
          textAlign="center"
          justifyContent="center"
          alignItems="center"
          width="full"
          whiteSpace="nowrap"
        >
          <Avatar
            size="lg"
            name="code_jaek"
            src="/assets/images/battles/avatar3.webp"
            padding={2}
          />
          Pack Bot 17
        </Flex>
        <Grid templateColumns={'repeat(2, 1fr)'} gap={2} height="full">
          <Flex direction="column" rowGap={2}>
            {BATTLE_CARDS_MONEY_PIC_DOWN.map((battleCard, index: number) => {
              return (
                <BattleDetailCardVoucher
                  key={battleCard.imageUrl + index}
                  {...battleCard}
                />
              )
            })}
          </Flex>
          <Flex direction="column" rowGap={2}>
            {BATTLE_CARDS_PIC.map((battleCard, index: number) => {
              return (
                <BattleDetailCardPic key={battleCard.imageUrl + index} {...battleCard} />
              )
            })}
          </Flex>
        </Grid>
      </Flex>
      <Box minWidth={4} marginY={'25px'} display={{ base: 'none', lg: 'block' }}>
        <Image src="/assets/images/battles/vs.webp" alt="versus" width={16} height={16} />
      </Box>
      <Flex direction={'column'} width={'full'} gap={5}>
        <Flex
          direction="row"
          textAlign="center"
          justifyContent="center"
          alignItems="center"
          width="full"
          whiteSpace="nowrap"
        >
          <Avatar
            size="lg"
            name="code_jaek"
            src="/assets/images/battles/avatar4.webp"
            padding={2}
          />
          Pack Bot 23
        </Flex>
        <Grid templateColumns="repeat(2, 1fr)" gap={2} height="full">
          {BATTLE_CARDS.map((battleCard, index) => {
            return (
              <GridItem key={battleCard.label + index}>
                <BattleDetailCard index={index + 1} />
              </GridItem>
            )
          })}
        </Grid>
      </Flex>
    </Flex>
  )
}

export default BattleCardContainer
