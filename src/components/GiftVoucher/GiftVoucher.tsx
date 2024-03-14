'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Box, Flex, Text } from '@chakra-ui/react'

interface IGiftVoucher {
  image: string
  labelHeader: string
  labelContent: string
  price: string
  hoverImage: string
}
const GiftVoucher = ({
  image,
  labelHeader,
  labelContent,
  price,
  hoverImage,
}: IGiftVoucher) => {
  const [hovered, setHovered] = useState<boolean>(false)

  return (
    <Flex
      width="full"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {!hovered ? (
        <Flex
          bg={'#313030'}
          borderRadius={15}
          width="full"
          px={5}
          pt={6}
          pb={7}
          justify="space-between"
        >
          <Flex gap={2}>
            <Box>
              <Image
                src={`${image}`}
                alt={labelHeader}
                width={40}
                height={40}
                style={{ width: '100%', height: 'auto' }}
              />
            </Box>
            <Flex direction="column" alignItems="space-around">
              <Text style={{ fontFamily: 'Clash Grotesk, sans-serif', fontWeight: 500 }}>
                {labelHeader}
              </Text>
              <Text style={{ fontFamily: 'Clash Grotesk, sans-serif', fontWeight: 500 }}>
                {labelContent}
              </Text>
            </Flex>
          </Flex>
          <Box>
            <Text style={{ fontFamily: 'Clash Grotesk, sans-serif', fontWeight: 500 }}>
              {'$' + Number(price).toLocaleString('us').toString()}
            </Text>
          </Box>
        </Flex>
      ) : (
        <Flex
          width={'full'}
          direction={'column'}
          bg={'#313030'}
          borderRadius={15}
          alignItems={'center'}
          overflow={'hidden'}
          height={'100px'}
          px={5}
          pt={6}
          pb={7}
        >
          <Box mb={'-70px'}>
            <Image src={hoverImage} alt="Your Image" width={130} height={130} />
          </Box>
        </Flex>
      )}
    </Flex>
  )
}

export default GiftVoucher
