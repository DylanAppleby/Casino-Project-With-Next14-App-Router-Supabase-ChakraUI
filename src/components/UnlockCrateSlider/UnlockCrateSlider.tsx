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
    <Flex direction="column" gap={3}>
      <Flex width="full" justifyContent="space-between">
        <Text fontFamily="Clash Grotesk" fontWeight={600}>
          0 XP
        </Text>
        <Text fontFamily="Clash Grotesk" fontWeight={600}>
          {label}
        </Text>
        <Text fontFamily="Clash Grotesk" fontWeight={600}>
          2500 XP
        </Text>
      </Flex>
      <Box
        display="flex"
        gap={3}
        flexDirection="column"
        bgColor={'#393e45'}
        rounded={'full'}
      >
        <Slider width={'full'}>
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
      <Flex width="full" justifyContent="space-between" alignItems={'center'} gap={7}>
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
            fontFamily="PP Neue Montreal"
            whiteSpace={'nowrap'}
            fontWeight="bold"
            fontStyle={'italic'}
          >
            LVL 0
          </Text>
        </Flex>
        <Text fontFamily="Airbnb Cereal" fontWeight={500} whiteSpace={'nowrap'}>
          Your VIP Progress
        </Text>
        <Flex gap={2} alignItems={'center'}>
          <Text fontFamily="PP Neue Montreal" whiteSpace={'nowrap'} fontStyle={'italic'}>
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
