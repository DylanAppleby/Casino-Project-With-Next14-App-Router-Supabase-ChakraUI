'use client'
import { Flex, Grid, GridItem } from '@chakra-ui/react'

import { CratesPage } from '@/components/CratesPage'

import { CRATES_PAGE } from '@/constants/mock'

const CratesPageContainer = () => {
  return (
    <Grid templateColumns={{ base: 'repeat(1, 1fr)', lg: 'repeat(1, 1fr)' }} gap={5}>
      <GridItem>
        <Grid
          templateColumns={{
            base: 'repeat(2, 1fr)',
            sm: 'repeat(3, 1fr)',
            md: 'repeat(4, 1fr)',
            lg: 'repeat(5, 1fr)',
            xl: 'repeat(5, 1fr)',
          }}
          gap={50}
          height="full"
        >
          {CRATES_PAGE.map((cratesPage, index) => {
            return (
              <GridItem key={cratesPage.label + index} flexDirection={'row'}>
                <Flex>
                  <CratesPage index={index + 1} />
                </Flex>
              </GridItem>
            )
          })}
        </Grid>
      </GridItem>
    </Grid>
  )
}

export default CratesPageContainer
