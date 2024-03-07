import { Flex } from '@chakra-ui/react'
import AffiliateCardContainer from '@/containers/AffiliateCardContainer'
import PaginationButton from '@/components/PaginationButton'
import AffiliateInforContainer from '@/containers/AffiliateInforContainer'

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
