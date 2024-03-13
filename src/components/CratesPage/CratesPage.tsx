import { Box, Button, Flex, Image, Text } from '@chakra-ui/react'
import { LockIcon } from '@chakra-ui/icons'
import { Space_Mono } from 'next/font/google'

interface ICratesPage {
  index: number
}

const spaceMono = Space_Mono({ subsets: ['latin'], weight: ['700'] })

const CratesPage = ({ index }: ICratesPage) => {
  return (
    <Flex flexDirection="column" gap={7} width={'full'}>
      {/* <Image
        src="/assets/images/rewards/whatisthis.webp"
        alt=""
        width={'full'}
        height={'auto'}
        // style={{ width: 'full', height: 'auto' }}
        borderRadius={'2rem'}
      /> */}
      <Flex
        height={'200px'}
        width={'full'}
        borderRadius={'30px'}
        bg={
          'linear-gradient(180deg, rgba(33,32,33,0) 63%, rgba(33,32,33,1) 100%), linear-gradient(90deg, rgba(36,33,35,1) 0%, rgba(36,33,35,1) 1%, rgba(65,63,64,1) 16%, rgba(65,63,64,1) 84%, rgba(36,33,35,1) 99%, rgba(36,33,35,1) 100%);'
        }
        padding={'8px'}
      >
        <Flex
          bgColor={'#2e2e2e'}
          width={'full'}
          borderRadius={'25px'}
          borderWidth={'10px'}
          borderColor={'#282628'}
          alignItems={'center'}
          justifyContent={'center'}
        >
          <Text
            fontSize={92}
            fontWeight={'black'}
            textColor={'orange.200'}
            textShadow={'0 0 24px #e9cea5'}
            className={spaceMono.className}
          >
            ?
          </Text>
        </Flex>
      </Flex>
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
          <Flex
            fontSize={25}
            fontWeight={'bold'}
            alignItems={'center'}
            justifyContent={'center'}
          >
            <LockIcon width={'1.3rem'} margin={'3px'} />
            Level{`${index}`}
          </Flex>
        </Flex>
      )}
    </Flex>
  )
}

export default CratesPage
