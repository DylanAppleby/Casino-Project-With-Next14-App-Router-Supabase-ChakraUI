import {
  Box,
  Flex,
  Avatar,
  ArrowBackIcon,
  LinkIcon,
  CheckCircleIcon,
} from '@/components/ChakraUIComponents'
import Image from 'next/image'
import BattleDetailContainer from '@/components/container/BattleDetailContainer'

export default function Battles() {
  return (
    <Flex width={'full'} direction={'column'}>
      <Flex height={'100px'} alignItems={'center'} justifyContent={'space-between'}>
        <Box>
          <ArrowBackIcon />
          View Battles
        </Box>
        <Box>Waiting for ESC Block 358167393</Box>
        <Box>Total Cost:$76.17</Box>
      </Flex>
      <Flex justifyContent={'space-between'}>
        <Flex
          width={75}
          height={7}
          bgColor="#e2e8f029"
          rounded="0.375rem"
          alignItems={'center'}
          justifyContent={'center'}
        >
          <LinkIcon margin={1} />
          Share
        </Flex>
        <Box marginTop={'50px'} marginBottom={'100px'} textAlign={'center'}>
          <Image
            src={'/assets/images/battles/luxury.webp'}
            alt={''}
            width={250}
            height={500}
            style={{ width: '100%', height: '100%' }}
          />
          <Box marginTop={'30px'}>$21.07</Box>
        </Box>
        <Flex
          width={100}
          height={8}
          bgColor="#e2e8f029"
          rounded="0.375rem"
          alignItems={'center'}
          justifyContent={'center'}
        >
          <CheckCircleIcon margin={1} />
          Fairness
        </Flex>
      </Flex>
      <Flex justifyContent={'space-between'} alignItems={'center'} gap={4}>
        <Flex
          direction="row"
          textAlign="center"
          justifyContent="center"
          alignItems="center"
          width="full"
          whiteSpace="nowrap"
        >
          <Avatar
            size="lg"
            name="code_jaek"
            src="/assets/images/battles/avatar1.webp"
            padding={2}
          />
          code_jaek
        </Flex>
        <Box minWidth={4}>
          <Image
            src="/assets/images/battles/vs.webp"
            alt="versus"
            width={16}
            height={16}
          />
        </Box>
        <Flex
          direction="row"
          textAlign="center"
          justifyContent="center"
          alignItems="center"
          width="full"
          whiteSpace="nowrap"
        >
          <Avatar
            size="lg"
            name="code_jaek"
            src="/assets/images/battles/avatar2.webp"
            padding={2}
          />
          Pack Bot 5
        </Flex>
        <Box minWidth={4}>
          <Image
            src="/assets/images/battles/vs.webp"
            alt="versus"
            width={16}
            height={16}
          />
        </Box>
        <Flex
          direction="row"
          textAlign="center"
          justifyContent="center"
          alignItems="center"
          width="full"
          whiteSpace="nowrap"
        >
          <Avatar
            size="lg"
            name="code_jaek"
            src="/assets/images/battles/avatar3.webp"
            padding={2}
          />
          Pack Bot 17
        </Flex>
        <Box minWidth={4}>
          <Image
            src="/assets/images/battles/vs.webp"
            alt="versus"
            width={16}
            height={16}
          />
        </Box>
        <Flex
          direction="row"
          textAlign="center"
          justifyContent="center"
          alignItems="center"
          width="full"
          whiteSpace="nowrap"
        >
          <Avatar
            size="lg"
            name="code_jaek"
            src="/assets/images/battles/avatar4.webp"
            padding={2}
          />
          Pack Bot 23
        </Flex>
      </Flex>
      <BattleDetailContainer />
    </Flex>
  )
}
