import { Flex } from '@chakra-ui/react'
import { FIAT_DATAS } from '@/constants/mock'
import Crypto from '@/components/Crypto'
const FiatContainer = () => {
  return (
    <Flex width="full" direction={'column'} gap={4}>
      {FIAT_DATAS.map((fiatData, index) => (
        <Crypto
          key={
            fiatData.header +
            fiatData.transactionID +
            fiatData.amountUSD +
            fiatData.status +
            fiatData.image +
            index
          }
          header={fiatData.header}
          transactionID={fiatData.transactionID}
          amountUSD={fiatData.amountUSD}
          status={fiatData.status}
          image={fiatData.image}
        />
      ))}
    </Flex>
  )
}

export default FiatContainer
