'use client'
import { Flex, Text, Button, Box } from '@chakra-ui/react'
import Image from 'next/image'
import countDownTimer from '@/utils/countDownTImer'
import countDownTimerWeek from '@/utils/countDownTimerWeek'
import countDownTimerMonth from '@/utils/countDownTimerMonth'
const FreeDateCrate = () => {
  return (
    <Flex direction={'column'} overflowX={'scroll'}>
      <Flex
        bgColor={'#4D4020'}
        width={'1248.02px'}
        height={'220'}
        border={'2px'}
        borderRadius={'1rem'}
        borderColor={'#F6C143'}
        marginY={5}
        gap={5}
      >
        <Flex
          marginX={10}
          marginY={5}
          direction={'column'}
          justifyContent={'space-between'}
        >
          <Text fontSize={33} color={'white'}>
            Free Daily Crates
          </Text>
          <Flex fontSize={25} color={'#F6C143'}>
            {countDownTimer(1710000000000)}
          </Flex>
          <Flex direction={'row'} gap={5} alignItems={'flex-end'}>
            <Button
              width={140}
              height={50}
              colorScheme="yellow"
              borderRadius={'0.75rem'}
              fontWeight={'bold'}
            >
              Open Crate
            </Button>
            <Image
              src="/assets/images/rewards/golden_box.webp"
              alt=""
              width={100}
              height={100}
              style={{ width: 'auto', height: 'full' }}
            />
          </Flex>
        </Flex>
        <Box
          marginX={1}
          marginY={5}
          width={5}
          borderLeft={'2px'}
          borderLeftColor={'#F6C143'}
        ></Box>
        <Flex margin={5} direction={'column'} justifyContent={'space-between'}>
          <Text fontSize={33} color={'white'}>
            Free Weekly Crates
          </Text>
          <Flex fontSize={25} color={'#F6C143'}>
            {countDownTimerWeek(1710000000000)}
          </Flex>
          <Flex direction={'row'} gap={5} alignItems={'flex-end'}>
            <Button
              width={140}
              height={50}
              colorScheme="yellow"
              variant={'outline'}
              borderRadius={'0.75rem'}
              border={'2px'}
              fontWeight={'bold'}
            >
              Open Crate
            </Button>
            <Image
              src="/assets/images/rewards/golden_box.webp"
              alt=""
              width={100}
              height={100}
              style={{ width: 'auto', height: 'full' }}
            />
          </Flex>
        </Flex>
        <Box
          margin={3}
          marginY={5}
          width={5}
          borderLeft={'2px'}
          borderLeftColor={'#F6C143'}
        ></Box>
        <Flex margin={5} direction={'column'} justifyContent={'space-between'}>
          <Text fontSize={33} color={'white'}>
            Free Monthly Crates
          </Text>
          <Flex fontSize={25} color={'#F6C143'}>
            {countDownTimerMonth(1710000000000)}
          </Flex>
          <Flex direction={'row'} gap={5} alignItems={'flex-end'}>
            <Button
              width={140}
              height={50}
              colorScheme="yellow"
              variant={'outline'}
              borderRadius={'0.75rem'}
              border={'2px'}
              fontWeight={'bold'}
            >
              Open Crate
            </Button>
            <Image
              src="/assets/images/rewards/golden_box.webp"
              alt=""
              width={100}
              height={100}
              style={{ width: 'auto', height: 'full' }}
            />
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default FreeDateCrate
