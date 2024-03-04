'use client'
import Image from 'next/image'
import {
  Flex,
  Text,
  Button,
  Box,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Heading,
  useColorModeValue,
} from '@chakra-ui/react'

const UnlockCrate = () => {
  return (
    <Flex
      bg={{
        base: 'transparent',
        sm: 'transparent',
        md: 'transparent',
        lg: useColorModeValue('white', '#313030'),
      }}
      margin={10}
      borderRadius={30}
      justifyContent="center"
      alignItems="center"
      borderWidth={{ base: 0, sm: 0, md: 0, lg: 2 }}
      borderColor="white"
      gap={2}
      direction={{ base: 'column', sm: 'column', md: 'column', lg: 'row' }}
    >
      <Flex
        direction="column"
        gap="8"
        px={{ base: 0, sm: 5, md: 10, lg: 20 }}
        py={{ base: 0, sm: 5, md: 10, lg: 10 }}
      >
        <Flex direction="column">
          <Heading fontFamily="ClashGrotesk" fontSize={{ base: 28, sm: 32, md: 40 }}>
            Unlock a crates with
          </Heading>
          <Heading fontFamily="ClashGrotesk" fontSize={{ base: 28, sm: 32, md: 40 }}>
            higher odds as you go
          </Heading>
        </Flex>
        <Box>
          <Text fontSize={{ base: 16, sm: 20, md: 24 }}>
            Every few packs opened, you unlock a crate...
          </Text>
          <Text fontSize={{ base: 16, sm: 20, md: 24 }}>
            The Ultimate prize one can get with 99% higher odds
          </Text>
        </Box>
        <Flex direction="column" width="full" gap={3}>
          <Flex width="full" justifyContent="space-between">
            <Text>0 XP</Text>
            <Text>2500 XP's left</Text>
            <Text>2500 XP</Text>
          </Flex>
          <Box
            display="flex"
            gap={3}
            flexDirection="column"
            bgColor={'#393e45'}
            rounded={'full'}
          >
            <Slider aria-label="slider-ex-1" size="xl">
              <SliderTrack>
                <SliderFilledTrack />
              </SliderTrack>
              <SliderThumb
                width={4}
                height={4}
                bg={useColorModeValue('yellow.300', 'yellow.500')}
              />
            </Slider>
          </Box>
          <Flex width="full" justifyContent="space-between">
            <Text>LVL 0</Text>
            <Text>Your VIP Progress</Text>
            <Text>LVL 1 UNLOCKED</Text>
          </Flex>
        </Flex>
        <Button
          bg={useColorModeValue('yellow.300', 'yellow.500')}
          h={{ base: '3rem' }}
          w={{ base: '5.5rem' }}
          color={useColorModeValue('gray.50', 'gray.800')}
        >
          Register
        </Button>
      </Flex>
      <Flex
        padding={10}
        alignItems="center"
        justifyContent="center"
        mr={{ base: 10, sm: 10, md: 10, lg: 20 }}
        minWidth={350}
        minHeight={100}
      >
        <Image
          src={`${process.env.NEXT_PUBLIC_SITE_URL}/assets/images/unlockcrate.webp`}
          alt="crate.webp"
          width={400}
          height={150}
        />
      </Flex>
    </Flex>
  )
}

export default UnlockCrate
