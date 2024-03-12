import { FC, useEffect } from 'react'

import { Avatar, Box, Button, Flex, Image } from '@chakra-ui/react'

export enum BattleType {
  ONE_ONE,
  ONE_ONE_ONE,
  ONE_ONE_ONE_ONE,
  TEAM,
}

export enum BattleOption {
  UPSIDE_DOWN,
  OPTION_TWO,
  SHARE_PROFIT,
}

interface IUser {
  name: string
  avatar: string
  level: string
}

interface IPack {
  id: string
  imageUrl: string
  price: string
  detail: any
}

interface IBattleCard {
  packs: IPack[]
  type: BattleType
  userList: IUser[]
  option: BattleOption
}

const PackCard = (props: IPack) => {
  return (
    <Box paddingX={1}>
      <Flex direction="row" width="60px" height="95px">
        <Image
          src="/assets/images/battles/luxury.webp"
          alt=""
          width={'full'}
          height={'auto'}
          margin={1.5}
        />
      </Flex>
    </Box>
  )
}

const PackCard1 = (props: IPack) => {
  return (
    <Box paddingX={1}>
      <Flex direction="row" width="60px" height="95px">
        <Image
          src="/assets/images/battles/luxury_black.webp"
          alt=""
          width={'full'}
          height={'auto'}
          margin={1.5}
        />
      </Flex>
    </Box>
  )
}
const PackCard2 = (props: IPack) => {
  return (
    <Box paddingX={1}>
      <Flex direction="row" width="60px" height="95px">
        <Image
          src="/assets/images/battles/Timeless.webp"
          alt=""
          width={'full'}
          height={'auto'}
          margin={1.5}
          style={{ width: 'auto', height: 'full' }}
        />
      </Flex>
    </Box>
  )
}

const BattleCard: FC<IBattleCard> = (props) => {
  const { packs, type, userList } = props

  return (
    <>
      <Flex
        width="full"
        bgColor="#e2e8f029"
        rounded="0.375rem"
        alignItems="center"
        justifyContent="center"
        padding={5}
        marginY={5}
        direction={{ base: 'column', md: 'row' }}
      >
        <Flex direction="column" alignItems="center" justifyContent="center">
          <Flex
            fontWeight={'black'}
            whiteSpace={'none'}
            alignItems={'center'}
            rounded="0.375rem"
          >
            <Image
              src="/assets/images/battles/point_rush.webp"
              alt=""
              width={5}
              height={5}
              margin={1}
            ></Image>
            {`${packs.length} rounds`}
          </Flex>
          <Flex
            direction={'row'}
            alignItems={'center'}
            margin={5}
            justifyContent="center"
          >
            <Avatar
              src={'/assets/images/battles/useravatar1.webp'}
              width={8}
              height={8}
            ></Avatar>
            <Image
              src="/assets/images/battles/vs.webp"
              alt=""
              width={2}
              height={2}
              margin={1}
            ></Image>
            <Avatar
              src={'/assets/images/battles/useravatar2.webp'}
              width={8}
              height={8}
            ></Avatar>
            <Image
              src="/assets/images/battles/vs.webp"
              alt=""
              width={2}
              height={2}
              margin={1}
            ></Image>
            <Avatar
              src={'/assets/images/battles/useravatar3.webp'}
              width={8}
              height={8}
            ></Avatar>
            <Image
              src="/assets/images/battles/vs.webp"
              alt=""
              width={2}
              height={2}
              margin={1}
            ></Image>
            <Avatar
              src={'/assets/images/battles/useravatar4.webp'}
              width={8}
              height={8}
            ></Avatar>
          </Flex>
          <Box fontWeight={'black'}>{`$${(232.82).toFixed(2)}`}</Box>
        </Flex>
        <Flex width={'full'} overflowX={'hidden'}>
          {packs.map((pack) => {
            return <PackCard {...pack} />
          })}
        </Flex>
        <Flex margin={'1rem'}>
          <Button bgColor=" #FABD2D">Join Battle</Button>
        </Flex>
      </Flex>
      <Flex
        width="full"
        bgColor="#e2e8f029"
        rounded="0.375rem"
        alignItems="center"
        justifyContent="center"
        padding={5}
        marginY={5}
        direction={{ base: 'column', md: 'row' }}
      >
        <Flex direction="column" alignItems="center" justifyContent="center">
          <Flex
            fontWeight={'black'}
            whiteSpace={'none'}
            alignItems={'center'}
            rounded="0.375rem"
          >
            <Image
              src="/assets/images/battles/share_mode.webp"
              alt=""
              width={5}
              height={5}
              margin={1}
            ></Image>
            {`${packs.length} rounds`}
          </Flex>
          <Flex
            direction={'row'}
            alignItems={'center'}
            margin={5}
            justifyContent="center"
          >
            <Avatar
              src={'/assets/images/battles/useravatar5.webp'}
              width={8}
              height={8}
            ></Avatar>
            <Image
              src="/assets/images/battles/vs.webp"
              alt=""
              width={2}
              height={2}
              margin={1}
            ></Image>
            <Avatar
              src={'/assets/images/battles/useravatar6.webp'}
              width={8}
              height={8}
            ></Avatar>
            <Image
              src="/assets/images/battles/vs.webp"
              alt=""
              width={2}
              height={2}
              margin={1}
            ></Image>
            <Avatar
              src={'/assets/images/battles/useravatar7.webp'}
              width={8}
              height={8}
            ></Avatar>
            <Image
              src="/assets/images/battles/vs.webp"
              alt=""
              width={2}
              height={2}
              margin={1}
            ></Image>
            <Avatar
              src={'/assets/images/battles/useravatar8.webp'}
              width={8}
              height={8}
            ></Avatar>
          </Flex>
          <Box fontWeight={'black'}>{`$${(225.92).toFixed(2)}`}</Box>
        </Flex>
        <Flex width={'full'} overflowX={'hidden'}>
          {packs.map((pack) => {
            return <PackCard1 {...pack} />
          })}
        </Flex>
        <Flex margin={'1rem'}>
          <Button>View Battle</Button>
        </Flex>
      </Flex>
      <Flex
        width="full"
        bgColor="#e2e8f029"
        rounded="0.375rem"
        alignItems="center"
        justifyContent="center"
        padding={5}
        marginY={5}
        direction={{ base: 'column', md: 'row' }}
      >
        <Flex direction="column" alignItems="center" justifyContent="center">
          <Flex
            fontWeight={'black'}
            whiteSpace={'none'}
            alignItems={'center'}
            rounded="0.375rem"
          >
            <Image
              src="/assets/images/battles/upside_down.webp"
              alt=""
              width={5}
              height={5}
              margin={1}
            ></Image>
            {`${packs.length} rounds`}
          </Flex>
          <Flex
            direction={'row'}
            alignItems={'center'}
            margin={5}
            justifyContent="center"
          >
            <Avatar
              src={'/assets/images/battles/useravatar9.webp'}
              width={8}
              height={8}
            ></Avatar>
            <Image
              src="/assets/images/battles/vs.webp"
              alt=""
              width={2}
              height={2}
              margin={1}
            ></Image>
            <Avatar
              src={'/assets/images/battles/useravatar10.webp'}
              width={8}
              height={8}
            ></Avatar>
            <Image
              src="/assets/images/battles/vs.webp"
              alt=""
              width={2}
              height={2}
              margin={1}
            ></Image>
            <Avatar
              src={'/assets/images/battles/useravatar11.webp'}
              width={8}
              height={8}
            ></Avatar>
            <Image
              src="/assets/images/battles/vs.webp"
              alt=""
              width={2}
              height={2}
              margin={1}
            ></Image>
            <Avatar
              src={'/assets/images/battles/useravatar12.webp'}
              width={8}
              height={8}
            ></Avatar>
          </Flex>
          <Box fontWeight={'black'}>{`$${(45.21).toFixed(2)}`}</Box>
        </Flex>
        <Flex width={'full'} overflowX={'hidden'}>
          {packs.map((pack) => {
            return <PackCard2 {...pack} />
          })}
        </Flex>
        <Flex margin={'1rem'}>
          <Button>View Results</Button>
        </Flex>
      </Flex>
    </>
  )
}

export default BattleCard
