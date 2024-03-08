'use client'
import {
  Flex,
  Text,
  Box,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  useColorModeValue,
} from '@chakra-ui/react'
import Image from 'next/image'
interface IUnlockCrateSlider {
  label: string
}
const UnlockCrateSlider = ({ label }: IUnlockCrateSlider) => {
  return (
    <Flex direction="column" width="full" gap={3}>
      <Flex width="full" justifyContent="space-between">
        <Text>0 XP</Text>
        <Text>{label}</Text>
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
      <Flex width="full" justifyContent="space-between" alignItems={'center'} gap={7}>
        <Flex gap={2}>
          <Box>
            <Image
              src="/assets/images/rectangle.webp"
              alt="rectangle icon"
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
        <Flex gap={4}>
          <Text whiteSpace={'nowrap'} fontStyle={'italic'}>
            LVL 1 UNLOCKED
          </Text>
          <Box>
            <Image
              src="/assets/images/rectangle.webp"
              alt="rectangle icon"
              width={14}
              height={14}
              style={{ width: '100%', height: '100%' }}
            />
          </Box>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default UnlockCrateSlider
