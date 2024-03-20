'use client'

import React, { ServerContext, useEffect } from 'react'
import { useState } from 'react'

import { useSearchParams } from 'next/navigation'

import {
  Box,
  Grid,
  GridItem,
  Image,
  Text,
  Flex,
  Button,
  useBreakpointValue,
  Switch,
  Container,
} from '@chakra-ui/react'
import { ChevronLeftIcon } from '@chakra-ui/icons'
import SlotUnlockCrate from '@/components/SlotUnlockCrate'
import FunctionCardContainer from '@/containers/FunctionCardContainer'
import RecommendedBoxConainer from '@/containers/RecommendedBoxContainer'
import SlotGameItem from '@/components/SlotGameItem'
import SlotGameRecentItemContainer from '@/containers/SlotGameRecentItemContainer'

import useWindowDimensionsObserver from '@/hooks/useWindowDimensionsObserver'

//for use supabase
import { useSupabase } from '@/contexts/supabase-provider'

// Example product data (simplified for demonstration)
const products = [
  {
    name: 'Product 1',
    imageUrl: '/assets/images/slot/1.webp',
    description: '$100',
  },
  {
    name: 'Product 2',
    imageUrl: '/assets/images/slot/2.webp',
    description: '$200',
  },
  {
    name: 'Product 3',
    imageUrl: '/assets/images/slot/3.webp',
    description: '$100',
  },
  {
    name: 'Product 4',
    imageUrl: '/assets/images/slot/4.webp',
    description: '$200',
  },
  {
    name: 'Product 5',
    imageUrl: '/assets/images/slot/5.webp',
    description: '$100',
  },
  {
    name: 'Product 6',
    imageUrl: '/assets/images/slot/6.webp',
    description: '$200',
  },
  {
    name: 'Product 7',
    imageUrl: '/assets/images/slot/7.webp',
    description: '$100',
  },
  {
    name: 'Product 8',
    imageUrl: '/assets/images/slot/8.webp',
    description: '$200',
  },
  {
    name: 'Product 9',
    imageUrl: '/assets/images/slot/9.webp',
    description: '$100',
  },
  {
    name: 'Product 10',
    imageUrl: '/assets/images/slot/10.webp',
    description: '$200',
  },
]

const ProductCarousel = () => {
  const searchParams = useSearchParams()
  const ids = searchParams.getAll('id')
  const supabase = useSupabase()

  const [index, setIndex] = useState<number>(0)
  const [itemsInBox, setItemsInBox] = useState<any>([])
  const [openPrice, setOpenPrice] = useState<number>(0)
  const displayCount = useBreakpointValue({ base: 3, md: 5, lg: 9 }) // Responsive display
  const { isMobile } = useWindowDimensionsObserver()

  useEffect(() => {
    getItemsInBox()
    getOpenPrice()
  }, [ids])

  const getItemsInBox = async () => {
    const { data, error } = await supabase
      .from('pack_to_item')
      .select('*, pack_item (*)')
      .in('pack_id', ids)
      .order('rate', { ascending: false })
    if (error) console.log('this is error:', error.message)
    else setItemsInBox(data)
  }

  const getOpenPrice = async () => {
    const { data, error } = await supabase.from('pack').select('open_price').in('id', ids)
    if (error) console.log('this is error:', error.message)
    else {
      let sum = 0
      data.forEach((num) => {
        sum += num.open_price
      })
      setOpenPrice(sum)
    }
  }

  const nextSlide = () => {
    let timeLimit = 0
    const interval = 50
    const intervalId = setInterval(() => {
      setIndex((current) => {
        // Calculate the next index, taking into account the display count and ensuring we loop back when reaching the end
        const nextIndex = current + Number(displayCount)
        if (nextIndex >= products.length) {
          // If the next index exceeds the products array length, loop back to the start
          return nextIndex % products.length
        }
        return nextIndex
      })
      timeLimit += interval
      if (timeLimit >= 3000) clearInterval(intervalId)
    }, interval)
  }

  // Adjusted logic to ensure that the carousel wraps around properly when reaching the end
  const visibleProducts = (() => {
    const endIndex = index + Number(displayCount)
    if (endIndex <= products.length) {
      return products.slice(index, endIndex)
    } else {
      // If the end index exceeds the products array, concatenate the start of the array to achieve the wraparound effect
      return [
        ...products.slice(index, products.length),
        ...products.slice(0, endIndex % products.length),
      ]
    }
  })()

  const centerIndex = Math.floor(Number(displayCount) / 2)

  return (
    <Flex direction={'column'} width={'full'} gap={12} mb={12}>
      <Flex direction={'column'} width={'full'}>
        {ids.map((id, index) => (
          <Flex
            key={id + index}
            align="center"
            justify="center"
            // backgroundImage={
            //   isMobile
            //     ? '/assets/images/slot/mobileback.webp'
            //     : '/assets/images/slot/slotback.webp'
            // }
            backgroundSize="cover"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            marginX={'calc(calc(calc(100vw - 100%)/2) * -1)'}
          >
            <Flex overflow="hidden" justify="center">
              {visibleProducts.map((product, index) => (
                <Box
                  key={product.name + index}
                  p={5}
                  textAlign="center"
                  transform={index === centerIndex ? 'scale(1.6)' : 'none'} // Scale up the center product
                  transition="transform 1s ease-in-out" // Smooth transition for scaling
                >
                  <Image
                    src={product.imageUrl}
                    alt={product.name}
                    boxSize={index === centerIndex ? '230px' : '200px'} // Optionally increase the box size of the center product
                    objectFit="contain"
                  />
                </Box>
              ))}
            </Flex>
          </Flex>
        ))}
        <Flex gap={{ base: 2, md: 5 }} width={'full'} direction={'column'}>
          <Flex
            bg="radial-gradient(circle, rgba(80,79,80,1) 0%, rgba(54,53,54,1) 50%, rgba(33,32,33,1) 100%)"
            height={'full'}
            marginX={'calc(calc(calc(100vw - 100%)/2) * -1)'}
          >
            <Container maxW={'container.xl'}>
              <Flex justifyContent={'space-between'} py={4}>
                <Button px={{ base: 2, md: 4 }}>
                  <Flex gap={2} alignItems={'center'}>
                    <Box rounded={'full'} bgColor={'#403f40'} p={1} width={7} height={7}>
                      <ChevronLeftIcon />
                    </Box>
                    <Text fontSize={{ base: '12', md: '14' }}>Back</Text>
                  </Flex>
                </Button>
                <Flex gap={{ base: 2, md: 6 }} alignItems={'center'}>
                  <Button rounded={{ base: 6, md: 'full' }} px={{ base: 2, md: 5 }}>
                    <Flex gap={1} alignItems={'center'}>
                      <Box>
                        <Image
                          src="/assets/images/slot/ticker.webp"
                          minWidth={5}
                          minHeight={5}
                          width={5}
                          height={5}
                        />
                      </Box>
                      <Text color={'#7c787c'} fontSize={{ base: '12', md: '14' }}>
                        FAIRNESS GUARANTEED
                      </Text>
                    </Flex>
                  </Button>
                  <Button rounded={'full'} width={10} padding={0}>
                    <Box>
                      <Image src="/assets/images/slot/sound.webp" width={4} height={3} />
                    </Box>
                  </Button>
                </Flex>
              </Flex>
            </Container>
          </Flex>
          <Flex
            direction={'column'}
            gap={2}
            alignItems={{ base: 'center', lg: 'start' }}
            width={'full'}
          >
            <Flex gap={{ base: 3, md: 6, lg: 9 }}>
              <Box py={15} pr={15}>
                <Image
                  src={'/assets/images/giftcard/giftcard1.webp'}
                  width={'190px'}
                  height={'full'}
                />
              </Box>
              <Flex direction={'column'} justifyContent={'space-between'} pb={15}>
                <Flex
                  py={'15px'}
                  bg={
                    'radial-gradient(circle, rgba(231,181,65,0.14049369747899154) 0%, rgba(231,181,65,0) 54%, rgba(231,181,65,0) 60%)'
                  }
                  justifyContent={'center'}
                  alignItems={'center'}
                  width={'100px'}
                >
                  <Button
                    rounded={'full'}
                    fontWeight={'bold'}
                    color={'#eeba42'}
                    borderColor={'#e7b541'}
                    borderWidth={2}
                    width={'150px'}
                  >
                    Featured
                  </Button>
                </Flex>
                <Flex direction={'column'} gap={2}>
                  <Text fontSize={{ base: 40, md: 44, lg: 52 }} fontWeight={'bold'}>
                    Luxury
                  </Text>
                  <Text
                    fontSize={{ base: 13, md: 16, lg: 20 }}
                    fontWeight={'bold'}
                    whiteSpace={'nowrap'}
                  >
                    Spin for a chance to win!
                  </Text>
                </Flex>
                <Flex gap={{ base: 4, md: 4, lg: 7 }} mt={'20px'} alignItems={'center'}>
                  <Button
                    height={'50px'}
                    bg={'#f6c043'}
                    color={'#281f0b'}
                    fontWeight={'bold'}
                    _hover={{ color: '#77560f' }}
                    display={{
                      base: 'none',
                      md: 'block',
                    }}
                  >
                    <Flex gap={2} alignItems={'center'}>
                      <Box width={4} height={6}>
                        <Image src="/assets/images/slot/open.webp" />
                      </Box>
                      <Text>Open for ${openPrice}</Text>
                    </Flex>
                  </Button>
                  <Button
                    onClick={nextSlide}
                    fontWeight={'bold'}
                    height={'50px'}
                    px={5}
                    display={{
                      base: 'none',
                      md: 'block',
                    }}
                  >
                    <Flex gap={2} alignItems={'center'}>
                      <Box width={5} height={6}>
                        <Image src="/assets/images/slot/refresh.webp" />
                      </Box>
                      <Text>Free Spin</Text>
                    </Flex>
                  </Button>
                  <Flex alignItems={'center'} gap={{ base: 1, md: 2, lg: 3 }}>
                    <Switch
                      size="lg"
                      sx={{
                        '& .chakra-switch__track': {
                          borderWidth: '2px',
                          borderColor: '#898985',
                          bgColor: '#3b3830',
                        },
                        '& .chakra-switch__thumb': {
                          bg: 'gray',
                        },
                      }}
                      _checked={{
                        '& .chakra-switch__track': {
                          borderWidth: '2px',
                          borderColor: '#898985',
                          bgColor: '#3b3830',
                        },
                        '& .chakra-switch__thumb': {
                          bg: '#f6c043',
                          boxShadow: '0px 3px 10px 6px #d3a03e',
                        },
                      }}
                    />
                    <Text
                      fontWeight={'bold'}
                      fontSize={{ base: 14, md: 16, lg: 18 }}
                      whiteSpace={'nowrap'}
                    >
                      Fast Opening
                    </Text>
                  </Flex>
                </Flex>
              </Flex>
            </Flex>
            <Flex
              gap={4}
              bgColor={'#282727'}
              px={5}
              py={3}
              display={{ base: 'flex', md: 'none' }}
            >
              <Button
                height={'50px'}
                bg={'#f6c043'}
                color={'#281f0b'}
                fontWeight={'bold'}
                _hover={{ color: '#77560f' }}
              >
                <Flex gap={2} alignItems={'center'}>
                  <Box width={4} height={6}>
                    <Image src="/assets/images/slot/open.webp" />
                  </Box>
                  <Text>Open for $867.08</Text>
                </Flex>
              </Button>
              <Button onClick={nextSlide} fontWeight={'bold'} height={'50px'} px={5}>
                <Flex gap={2} alignItems={'center'}>
                  <Box width={5} height={6}>
                    <Image src="/assets/images/slot/refresh.webp" />
                  </Box>
                  <Text>Free Spin</Text>
                </Flex>
              </Button>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      <SlotGameRecentItemContainer />
      <Flex direction={'column'} width={'full'} gap={8}>
        <Text
          fontSize={{ base: 24, md: 28, lg: 32 }}
          fontWeight={'bold'}
          whiteSpace={'nowrap'}
        >
          Items in this box
        </Text>
        <Grid
          width="full"
          templateColumns="repeat(30, 1fr)"
          rowGap={{ base: 4, md: 6 }}
          columnGap={{ base: 2, md: 4 }}
          mb={8}
        >
          {itemsInBox.map((slotGameItem: any, index: number) => (
            <GridItem
              colSpan={{ base: 15, md: 10, lg: 6 }}
              overflow="none"
              borderRadius={1}
              key={index}
            >
              <SlotGameItem
                percentage={slotGameItem.rate}
                imageUrl={slotGameItem.pack_item.image_url}
                collection={slotGameItem.pack_item.name}
                brand={slotGameItem.pack_item.brand}
                price={slotGameItem.pack_item.price}
              />
            </GridItem>
          ))}
        </Grid>
      </Flex>
      <RecommendedBoxConainer />
      <SlotUnlockCrate />
      <FunctionCardContainer />
    </Flex>
  )
}

export default ProductCarousel
