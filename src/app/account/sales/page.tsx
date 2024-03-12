import { Flex } from '@chakra-ui/react'
import SalesContainer from '@/containers/SalesContainer'
import PaginationButton from '@/components/PaginationButton'

const Sales = () => {
  return (
    <Flex width={'full'} direction={'column'} justifyContent={'center'}>
      <Flex direction={'column'} gap={6}>
        <Flex
          width={'full'}
          height={'50px'}
          borderBottom={'1px'}
          fontSize={'20px'}
          fontWeight={'black'}
        >
          Sales
        </Flex>
        <PaginationButton />
        <SalesContainer />
      </Flex>
    </Flex>
  )
}

export default Sales
