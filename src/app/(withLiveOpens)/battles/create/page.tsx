import { Flex, Text, Image, Button, Box } from '@/components/ChakraUIComponents'
import { BattleSummary, SelectedPacks } from '@/components/CreateBattle'

import BattleOptionsContainer from '@/containers/BattleOptionsContainer'
import SelectPlayersContainer from '@/containers/SelectPlayersContainer'

export default function Create() {
  return (
    <Box
      paddingX={{ base: 'none', lg: '200px' }}
      width={'full'}
      height={'full'}
      position="relative"
    >
      <Flex direction="column" gap={8}>
        <Flex alignItems={'center'} gap={1} margin={-1}>
          <Image
            src={'/assets/images/create/fight.webp'}
            alt="newbattle"
            width={'30px'}
            height={'30px'}
          />
          <Text fontSize={'30px'} fontWeight={'black'}>
            New Battle
          </Text>
        </Flex>
        <SelectPlayersContainer />
        <SelectedPacks />
        <BattleOptionsContainer />
        <BattleSummary />
      </Flex>
      <Box position="sticky" paddingTop={8} bottom={0}>
        <Button
          width="full"
          height="100px"
          fontSize="18px"
          bgColor="#d0a249"
          _hover={{ bgColor: 'yellow.500' }}
        >
          <Flex alignItems="center" gap="2">
            <Text fontSize="40px" fontWeight="medium">
              +
            </Text>
            <Text fontWeight="bold" mt="2">
              Create Battle for $10,337.98 USD
            </Text>
          </Flex>
        </Button>
      </Box>
    </Box>
  )
}
