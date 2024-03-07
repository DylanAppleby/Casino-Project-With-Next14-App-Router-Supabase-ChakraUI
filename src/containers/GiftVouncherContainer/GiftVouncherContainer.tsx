import { Flex } from '@chakra-ui/react'
import GiftVouncher from '@/components/GiftVouncher'
import { GIFT_VOUNCHERS } from '@/constants/mock'
const GiftVouncherContainer = () => {
  return (
    <Flex width="full" direction="column" gap="4" mb={8}>
      {GIFT_VOUNCHERS.map((giftVouncher, index) => (
        <GiftVouncher
          key={giftVouncher.labelHeader + giftVouncher.labelContent + index}
          image={giftVouncher.image}
          labelHeader={giftVouncher.labelHeader}
          labelContent={giftVouncher.labelContent}
          price={giftVouncher.price}
        />
      ))}
    </Flex>
  )
}

export default GiftVouncherContainer
