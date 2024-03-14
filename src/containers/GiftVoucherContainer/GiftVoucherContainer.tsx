import { Flex } from '@chakra-ui/react'
import GiftVoucher from '@/components/GiftVoucher'
import { GIFT_VOUCHERS } from '@/constants/mock'
const GiftVoucherContainer = () => {
  return (
    <Flex width="full" direction="column" gap="4" mb={8}>
      {GIFT_VOUCHERS.map((giftVoucher, index) => (
        <GiftVoucher
          key={giftVoucher.labelHeader + giftVoucher.labelContent + index}
          image={giftVoucher.image}
          labelHeader={giftVoucher.labelHeader}
          labelContent={giftVoucher.labelContent}
          price={giftVoucher.price}
          hoverImage={giftVoucher.hoverImage}
        />
      ))}
    </Flex>
  )
}

export default GiftVoucherContainer
