import { Box, Button, Flex, Image } from '@chakra-ui/react'
import { LockIcon } from '@chakra-ui/icons'

interface ICratesPage {
  index: number
}

const CratesPage = ({ index }: ICratesPage) => {
  return (
    <Flex flexDirection="column" gap={5}>
      <Image
        src="/assets/images/rewards/whatisthis.webp"
        alt=""
        width={'full'}
        height={'auto'}
        // style={{ width: 'full', height: 'auto' }}
        borderRadius={'2rem'}
      />
      {index < 4 && (
        <Flex direction={'row'} justifyContent="center">
          <Button
            width={'full'}
            height={'50'}
            colorScheme="yellow"
            borderRadius={'0.75rem'}
            fontWeight={'bold'}
          >
            Open Crate
          </Button>
        </Flex>
      )}
      {index >= 4 && (
        <Flex direction={'row'} justifyContent="center">
          <Flex fontSize={25} fontWeight={'bold'} alignItems={'center'}>
            <LockIcon />
            Level{`${index}`}
          </Flex>
        </Flex>
      )}
    </Flex>
  )
}

export default CratesPage
