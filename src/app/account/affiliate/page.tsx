import { Flex } from '@chakra-ui/react'
import AffiliateCardContainer from '@/components/container/AffiliateCardContainer'
import PaginationButton from '@/components/PaginationButton'
import AffiliateInforContainer from '@/components/container/AffiliateInforContainer'
const Affiliate = () => {
  return (
    <Flex width={'full'} direction={'column'} gap={6}>
      <AffiliateCardContainer />
      <PaginationButton />
      <AffiliateInforContainer />
    </Flex>
  )
}

export default Affiliate
