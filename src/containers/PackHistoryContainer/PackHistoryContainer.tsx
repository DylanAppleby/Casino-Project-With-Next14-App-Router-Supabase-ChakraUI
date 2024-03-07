import { Flex } from '@chakra-ui/react'
import { PACK_HISTORYS } from '@/constants/mock'
import PackHistory from '@/components/PackHistory'

const PackHistoryContainer = () => {
  return (
    <Flex width="full" direction={'column'} gap={4}>
      {PACK_HISTORYS.map((packHistory, index) => (
        <PackHistory
          key={
            packHistory.amountUSD +
            packHistory.cardImage +
            packHistory.cardName +
            packHistory.cardStatus +
            packHistory.header +
            packHistory.presentImage +
            index
          }
          amountUSD={packHistory.amountUSD}
          cardImage={packHistory.cardImage}
          cardName={packHistory.cardName}
          cardStatus={packHistory.cardStatus}
          header={packHistory.header}
          presentImage={packHistory.presentImage}
        />
      ))}
    </Flex>
  )
}

export default PackHistoryContainer
