import {
  Box,
  Flex,
  Avatar,
  ArrowBackIcon,
  LinkIcon,
  CheckCircleIcon,
  Text,
} from '@/components/ChakraUIComponents'
import Image from 'next/image'
import Link from 'next/link'
import BattleCardContainer from '@/containers/BattleCardContainer'

export default function Battles() {
  return (
    <Flex width={'full'} direction={'column'}>
      <Flex height={'100px'} alignItems={'center'} justifyContent={'space-between'}>
        <Link href="/battles">
          <Flex alignItems={'center'} gap={1}>
            <ArrowBackIcon />
            <Text fontWeight={'Bold'}>View Battles</Text>
          </Flex>
        </Link>
        <Text fontWeight={'bold'}>Waiting for ESC Block 358167393</Text>
        <Text fontWeight={'bold'}>Total Cost:$76.17</Text>
      </Flex>
      <Flex direction={'column'} gap={10}>
        <Flex justifyContent={'space-between'}>
          <Flex
            width={'100px'}
            height={8}
            bgColor="#e2e8f029"
            rounded="0.375rem"
            alignItems={'center'}
            justifyContent={'center'}
            gap={1.5}
          >
            <LinkIcon width={3.5} height={3} />
            <Text fontWeight={'bold'} fontSize={14}>
              Share
            </Text>
          </Flex>
          <Flex direction={'column'} alignItems={'center'} gap={5}>
            <Box>
              <Image
                src={'/assets/images/battles/luxury.webp'}
                alt={''}
                width={250}
                height={500}
                style={{ width: '100%', height: '100%' }}
              />
            </Box>
            <Text fontWeight={'bold'} fontSize={18}>
              $21.07
            </Text>
          </Flex>
          <Flex
            width={'100px'}
            height={8}
            bgColor="#e2e8f029"
            rounded="0.375rem"
            alignItems={'center'}
            justifyContent={'center'}
            gap={1.5}
          >
            <CheckCircleIcon width={3} height={3} />
            <Text fontWeight={'bold'} fontSize={14}>
              Fairness
            </Text>
          </Flex>
        </Flex>
        <Flex alignItems={'center'}>
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
      </Flex>
      <BattleCardContainer />
    </Flex>
  )
}
