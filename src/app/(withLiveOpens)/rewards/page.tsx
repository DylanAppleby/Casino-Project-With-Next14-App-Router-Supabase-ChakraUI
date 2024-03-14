import { Image, Button, Flex, Text, Box } from '@/components/ChakraUIComponents'

import CratesPageContainer from '@/containers/CratesPageContainer'
import UnlockCrateSlider from '@/components/UnlockCrateSlider'
import FreeDateCrate from '@/components/FreeDateCrate'

const Rewards = () => {
  return (
    <Flex direction={'column'} gap={5} overflowX={'hidden'}>
      <Flex direction={'column'}>
        <Flex direction={'row'} gap={5} justifyContent={'space-evenly'}>
          <Box>
            <Image
              src="/assets/images/rewards/golden_box_opened.webp"
              alt=""
              width={250}
              height={250}
              style={{ width: 'auto', height: 'full' }}
              display={{ base: 'none', lg: 'block' }}
            />
          </Box>
          <Flex
            direction="column"
            marginY={5}
            alignItems="space-between"
            gap={1}
            width={{ base: 'full', lg: '500px' }}
          >
            <Text fontSize={50} fontWeight={'black'} textAlign={'center'}>
              Your Crates
            </Text>
            <UnlockCrateSlider label="$1568.89 left" />
          </Flex>
          <Flex alignItems={'center'}>
            <Image
              src="/assets/images/rewards/golden_key.webp"
              alt=""
              width={200}
              height={200}
              style={{ width: 'auto', height: 'full' }}
              display={{ base: 'none', lg: 'block' }}
            />
          </Flex>
        </Flex>
        <FreeDateCrate />
      </Flex>
      <Flex direction={'row'} justifyContent={'space-between'}>
        <Flex>Showing 15-1 of 7</Flex>
        <Flex gap={3}>
          <Button>Previous</Button>
          <Button>Next</Button>
        </Flex>
      </Flex>
      <Flex direction={'column'}>
        <CratesPageContainer />
      </Flex>
      <Flex direction={'row'} justifyContent={'space-between'}>
        <Flex>Showing 15-1 of 7</Flex>
        <Flex gap={3}>
          <Button>Previous</Button>
          <Button>Next</Button>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default Rewards
