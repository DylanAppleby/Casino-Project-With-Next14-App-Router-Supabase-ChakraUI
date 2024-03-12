import { Flex } from '@chakra-ui/react'
import { SALES } from '@/constants/mock'
import Sales from '@/components/Sales'
const SalesContainer = () => {
  return (
    <Flex width="full" direction={'column'} gap={4}>
      {SALES.map((sales, index) => (
        <Sales
          key={sales.header + sales.product + sales.brand + sales.amountUSD + index}
          header={sales.header}
          product={sales.product}
          brand={sales.brand}
          amountUSD={sales.amountUSD}
        />
      ))}
    </Flex>
  )
}

export default SalesContainer
