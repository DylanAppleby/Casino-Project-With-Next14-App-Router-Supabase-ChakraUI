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
      borderRadius={30}
      justifyContent="center"
      alignItems="center"
      direction={{ base: 'column', sm: 'column', md: 'column', lg: 'row' }}
      mt={3}
    >
      <Flex
        direction="column"
        gap="8"
        px={{ base: 0, md: 10, lg: 20 }}
        py={{ base: 0, md: 10, lg: 10 }}
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
          <Text fontSize={{ base: 15, sm: 18, md: 21 }} whiteSpace={'nowrap'}>
            Every few packs opened, you unlock a crate...
          </Text>
          <Text fontSize={{ base: 15, sm: 18, md: 21 }} whiteSpace={'nowrap'}>
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
            <Flex gap={2}>
              <Box>
                <Image
                  src="/assets/images/rectangle.webp"
                  alt="crown icon"
                  width={16}
                  height={16}
                  style={{ width: '100%', height: '100%' }}
                />
              </Box>
              <Text whiteSpace={'nowrap'} fontWeight="bold" fontStyle={'italic'}>
                LVL 0
              </Text>
            </Flex>
            <Text whiteSpace={'nowrap'}>Your VIP Progress</Text>
            <Flex gap={5}>
              <Text whiteSpace={'nowrap'}>LVL 1 UNLOCKED</Text>
              <Box>
                <Image
                  src="/assets/images/rectangle.webp"
                  alt="crown icon"
                  width={16}
                  height={16}
                  style={{ width: '100%', height: '100%' }}
                />
              </Box>
            </Flex>
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
      <Flex padding={10} alignItems="center" justifyContent="center">
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

export default UnlockCrate
