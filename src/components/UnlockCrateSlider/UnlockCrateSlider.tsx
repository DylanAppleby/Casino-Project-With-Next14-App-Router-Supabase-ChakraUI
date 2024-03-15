'use client'
import {
  Flex,
  Text,
  Box,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
} from '@chakra-ui/react'
import Image from 'next/image'
interface IUnlockCrateSlider {
  label: string
}
const UnlockCrateSlider = ({ label }: IUnlockCrateSlider) => {
  return (
    <Flex direction="column" gap={3} width={'full'}>
      <Flex width={'full'} justifyContent="space-between">
        <Text
          style={{ fontFamily: 'Clash Grotesk, sans-serif', fontWeight: 500 }}
          fontWeight={600}
          fontSize={{ base: '12px', md: '16px' }}
        >
          0 XP
        </Text>
        <Text
          style={{ fontFamily: 'Clash Grotesk, sans-serif', fontWeight: 500 }}
          fontWeight={600}
          fontSize={{ base: '12px', md: '16px' }}
        >
          {label}
        </Text>
        <Text
          style={{ fontFamily: 'Clash Grotesk, sans-serif', fontWeight: 500 }}
          fontWeight={600}
          fontSize={{ base: '12px', md: '16px' }}
        >
          2500 XP
        </Text>
      </Flex>
      <Box
        display="flex"
        gap={3}
        flexDirection="column"
        bgColor={'#393e45'}
        rounded={'full'}
        width={'full'}
      >
        <Slider>
          <SliderTrack height={'full'} rounded={'full'}>
            <SliderFilledTrack bgColor={'#d3a03e'} />
          </SliderTrack>
          <SliderThumb
            width={4}
            height={4}
            bg={'yellow.500'}
            borderWidth={1}
            borderColor={'#ffffff'}
          />
        </Slider>
      </Box>
      <Flex justifyContent="space-between" alignItems={'center'} width={'full'}>
        <Flex gap={2} alignItems={'center'}>
          <Box>
            <Image
              src="/assets/images/rectangle.webp"
              alt="rectangle icon"
              width={16}
              height={16}
              style={{ width: '16px', height: '17px', minWidth: '16px' }}
            />
          </Box>
          <Text
            style={{ fontFamily: 'Clash Grotesk, sans-serif', fontWeight: 500 }}
            whiteSpace={'nowrap'}
            fontWeight="bold"
            fontStyle={'italic'}
            fontSize={{ base: '12px', md: '16px' }}
          >
            LVL 0
          </Text>
        </Flex>
        <Text
          style={{ fontFamily: 'Clash Grotesk, sans-serif', fontWeight: 500 }}
          fontWeight={500}
          whiteSpace={'nowrap'}
          fontSize={{ base: '12px', md: '16px' }}
        >
          Your VIP Progress
        </Text>
        <Flex gap={2} alignItems={'center'}>
          <Text
            style={{ fontFamily: 'Clash Grotesk, sans-serif', fontWeight: 500 }}
            whiteSpace={'nowrap'}
            fontStyle={'italic'}
            fontSize={{ base: '12px', md: '16px' }}
          >
            LVL 1 UNLOCKED
          </Text>
          <Box>
            <Image
              src="/assets/images/rectangle.webp"
              alt="rectangle icon"
              width={16}
              height={16}
              style={{ width: '16px', height: '17px', minWidth: '16px' }}
            />
          </Box>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default UnlockCrateSlider
