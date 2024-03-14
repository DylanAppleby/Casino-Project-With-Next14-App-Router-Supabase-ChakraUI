import { Grid, GridItem } from '@chakra-ui/react'
import { CRYPTO_SELECTS } from '@/constants/cryptoSelect'
import CryptoSelect from '@/components/CryptoSelect'

const CryptoSelectContainer = () => {
  return (
    <Grid width="full" templateColumns="repeat(4, 1fr)" rowGap={4} columnGap={3} mb={8}>
      {CRYPTO_SELECTS.map((cryptoSelect, index) => {
        return (
          <GridItem key={cryptoSelect.label + index} colSpan={1}>
            <CryptoSelect
              imageURL={cryptoSelect.imageURL}
              label={cryptoSelect.label}
              name={cryptoSelect.name}
            />
          </GridItem>
        )
      })}
    </Grid>
  )
}

export default CryptoSelectContainer
