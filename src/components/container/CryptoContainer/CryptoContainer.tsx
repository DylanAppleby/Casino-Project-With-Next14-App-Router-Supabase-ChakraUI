import { Flex } from '@chakra-ui/react'
import { CRYPTO_DATAS } from '@/constants/mock'
import Crypto from '@/components/Crypto'
const CryptoContainer = () => {
  return (
    <Flex width="full" direction={'column'} gap={4}>
      {CRYPTO_DATAS.map((cryptoData, index) => (
        <Crypto
          key={
            cryptoData.header +
            cryptoData.transactionID +
            cryptoData.amountUSD +
            cryptoData.status +
            cryptoData.image +
            index
          }
          header={cryptoData.header}
          transactionID={cryptoData.transactionID}
          amountUSD={cryptoData.amountUSD}
          status={cryptoData.status}
          image={cryptoData.image}
        />
      ))}
    </Flex>
  )
}

export default CryptoContainer
