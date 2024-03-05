import { Flex } from '@chakra-ui/react'
import { WITHDRAWALS } from '@/constants/mock'
import Crypto from '@/components/Crypto'
const WithdrawalsContainer = () => {
  return (
    <Flex width="full" direction={'column'} gap={4}>
      {WITHDRAWALS.map((withdrawal, index) => (
        <Crypto
          key={
            withdrawal.header +
            withdrawal.transactionID +
            withdrawal.amountUSD +
            withdrawal.status +
            withdrawal.image +
            index
          }
          header={withdrawal.header}
          transactionID={withdrawal.transactionID}
          amountUSD={withdrawal.amountUSD}
          status={withdrawal.status}
          image={withdrawal.image}
        />
      ))}
    </Flex>
  )
}

export default WithdrawalsContainer
