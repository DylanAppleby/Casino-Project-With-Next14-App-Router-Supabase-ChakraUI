import { Flex, Text } from '@chakra-ui/react'
import SlotGameRecentItem from '@/components/SlotGameRecentItem'
import { SLOT_GAME_RECENT_ITEMS } from '@/constants/mock'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

const responsive = {
  desktop1: {
    breakpoint: { max: 3000, min: 1280 },
    items: 7,
    partialVisibilityGutter: 30,
  },
  desktop2: {
    breakpoint: { max: 1280, min: 1100 },
    items: 6,
    partialVisibilityGutter: 30,
  },
  desktop3: {
    breakpoint: { max: 1100, min: 1000 },
    items: 5,
    partialVisibilityGutter: 30,
  },
  tablet1: {
    breakpoint: { max: 1000, min: 750 },
    items: 4,
    partialVisibilityGutter: 30,
  },
  tablet2: {
    breakpoint: { max: 750, min: 600 },
    items: 3,
    partialVisibilityGutter: 30,
  },
  mobile1: {
    breakpoint: { max: 600, min: 400 },
    items: 2,
    partialVisibilityGutter: 30,
  },
  mobile2: {
    breakpoint: { max: 400, min: 320 },
    items: 1,
    partialVisibilityGutter: 30,
  },
}

const SlotGameRecentItemContainer = () => {
  return (
    <Flex direction={'column'} width={'full'} gap={8}>
      <Flex
        direction={'row'}
        gap={{ base: '10', md: '16rem', lg: '20rem' }}
        justifyContent={{ base: 'center', lg: 'start' }}
      >
        <Text
          fontSize={{ base: 18, md: 20, lg: 24 }}
          fontWeight={'bold'}
          whiteSpace={'nowrap'}
        >
          Best unboxings
        </Text>
        <Text
          fontSize={{ base: 18, md: 20, lg: 24 }}
          fontWeight={'bold'}
          whiteSpace={'nowrap'}
          display={{ base: 'none', md: 'none', lg: 'inline' }}
        >
          Recently unboxed
        </Text>
      </Flex>
      <Carousel responsive={responsive} itemClass="carousel-item-padding-20-px">
        {SLOT_GAME_RECENT_ITEMS.map((slotGameRecentItem, index) => (
          <SlotGameRecentItem
            key={slotGameRecentItem.imageUrl + index}
            bigbgUrl={slotGameRecentItem.bigbgUrl}
            smallbgUrl={slotGameRecentItem.smallbgUrl}
            imageUrl={slotGameRecentItem.imageUrl}
            price={slotGameRecentItem.price}
          />
        ))}
      </Carousel>
    </Flex>
  )
}

export default SlotGameRecentItemContainer
