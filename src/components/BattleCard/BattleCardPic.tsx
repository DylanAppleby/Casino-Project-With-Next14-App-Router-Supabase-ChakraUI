import Image from 'next/image'

import { Flex } from '@chakra-ui/react'

interface IBattleCardPic {
  imageUrl: string
}

const BattleCardPic = ({ imageUrl }: IBattleCardPic) => {
  return (
    <Flex
      width="full"
      height="full"
      bgColor="#e2e8f029"
      rounded="0.375rem"
      padding={4}
      alignItems="center"
    >
      <Image
        src={imageUrl}
        alt="placeholder"
        width={100}
        height={200}
        style={{ width: '100%', height: 'auto' }}
      />
    </Flex>
  )
}

export default BattleCardPic
