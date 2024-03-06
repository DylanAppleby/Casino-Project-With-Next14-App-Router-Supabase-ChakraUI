import { Flex, Text } from '@chakra-ui/react'
import AffiliateInfor from '@/components/AffiliateInfor'
import { AFFILIATEINFORS } from '@/constants/mock'
const AffiliateInforContainer = () => {
  return (
    <Flex direction={'column'} width={'full'} gap={6}>
      <Flex
        justifyContent={'space-between'}
        py={3}
        pl={3}
        pr={9}
        width={'full'}
        borderBottomWidth={2}
        alignItems={'center'}
      >
        <Text
          color="#6a686a"
          ml={12}
          mr={10}
          fontWeight={'bold'}
          fontSize={{ base: '12', md: '14', lg: '16' }}
        >
          User
        </Text>
        <Text
          color="#6a686a"
          ml={11}
          fontWeight={'bold'}
          fontSize={{ base: '12', md: '14', lg: '16' }}
        >
          Deposited
        </Text>
        <Text
          color="#6a686a"
          fontWeight={'bold'}
          fontSize={{ base: '12', md: '14', lg: '16' }}
        >
          Opened
        </Text>
        <Text
          color="#6a686a"
          fontWeight={'bold'}
          fontSize={{ base: '12', md: '14', lg: '16' }}
        >
          Commision
        </Text>
      </Flex>
      {AFFILIATEINFORS.map((affiliateInfor, index) => (
        <AffiliateInfor
          key={affiliateInfor.user + affiliateInfor.deposited + index}
          user={affiliateInfor.user}
          deposited={affiliateInfor.deposited}
          opened={affiliateInfor.opened}
          commision={affiliateInfor.commision}
        />
      ))}
    </Flex>
  )
}

export default AffiliateInforContainer
