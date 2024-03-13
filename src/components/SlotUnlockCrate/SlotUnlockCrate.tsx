'use client'
import Image from 'next/image'
import { Flex, Text, Button, Box, Heading, useColorModeValue } from '@chakra-ui/react'
import UnlockCrateSlider from '@/components/UnlockCrateSlider'

const SlotUnlockCrate = () => {
  return (
    <Flex
      bg={{
        base: 'transparent',
        sm: 'transparent',
        md: 'transparent',
        lg: useColorModeValue('white', '#313030'),
      }}
      borderRadius={30}
      justifyContent="center"
      alignItems="center"
      direction={{ base: 'column', sm: 'column', md: 'column', lg: 'row' }}
    >
      <Flex
        direction="column"
        gap="8"
        px={{ base: 0, md: 10, lg: 10 }}
        py={{ base: 0, md: 10, lg: 10 }}
        flex={1}
      >
        <Flex direction="column">
          <Heading
            fontFamily="Clash Grotesk"
            fontWeight={500}
            fontSize={{ base: 28, sm: 32, md: 40 }}
          >
            Unlock a crates with
          </Heading>
          <Heading
            fontFamily="ClashGrotesk"
            fontWeight={500}
            fontSize={{ base: 28, sm: 32, md: 40 }}
          >
            higher odds as you go
          </Heading>
        </Flex>
        <Box>
          <Text
            fontSize={{ base: 15, sm: 18, md: 21 }}
            fontFamily="Airbnb Cereal"
            fontWeight={500}
            whiteSpace={'nowrap'}
          >
            Every few packs opened, you unlock a crate...
          </Text>
          <Text
            fontSize={{ base: 15, sm: 18, md: 21 }}
            fontFamily="Airbnb Cereal"
            fontWeight={500}
            whiteSpace={'nowrap'}
          >
            The Ultimate prize one can get with 99% higher odds
          </Text>
        </Box>
        <Button
          bg={useColorModeValue('yellow.300', 'yellow.500')}
          h={{ base: '3rem' }}
          w={{ base: '9rem' }}
          color={useColorModeValue('gray.50', 'gray.800')}
          _hover={{ bg: useColorModeValue('yellow.300', 'yellow.400') }}
        >
          <Flex
            width={'2rem'}
            height={'1rem'}
            bgColor={'#222'}
            borderRadius={'20%'}
            margin={1}
            alignItems={'center'}
          >
            <Text color={'yellow.500'} width={'1rem'} fontWeight={'black'}>
              ?
            </Text>
          </Flex>
          <Text whiteSpace={'nowrap'} fontWeight={'bold'}>
            My Crates {'('}1{')'}
          </Text>
        </Button>
        <UnlockCrateSlider label="$1568.89 left" />
      </Flex>
      <Flex padding={10} alignItems="center" justifyContent="center" flex={1}>
        <Image
          src={`/assets/images/unlockcrate.webp`}
          alt="crate.webp"
          width={400}
          height={150}
          style={{ width: '100%', height: '100%' }}
        />
      </Flex>
    </Flex>
  )
}

export default SlotUnlockCrate
