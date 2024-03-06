import { Flex } from '@chakra-ui/react'
import AffiliateCardContainer from '@/components/container/AffiliateCardContainer'
import PaginationButton from '@/components/PaginationButton'
const Affiliate = () => {
  return (
    <Flex width={'full'} direction={'column'} gap={6}>
      <AffiliateCardContainer />
      <PaginationButton />
    </Flex>
  )
}

export default Affiliate
