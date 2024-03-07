import { Flex } from '@chakra-ui/react'
import { RaceCards, LimitRacerTIme } from '@/constants/mock'
import RaceCardHead from '@/components/RaceCard/RaceCardHead'
import RaceCardElement from '@/components/RaceCard/RaceCardElement'

const RaceCard = () => {
  return (
    <Flex width={'full'} direction={'column'} paddingY={10}>
      <RaceCardHead avatar={RaceCards[7].avatar} timestamp={'0H : 00M : 00S'} />
      <RaceCardElement raceCards={RaceCards} winnerFlag={0} />
      <RaceCardElement raceCards={RaceCards} winnerFlag={1} />
    </Flex>
  )
}

export default RaceCard
