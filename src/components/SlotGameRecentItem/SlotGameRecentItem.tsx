import { Flex, Text, Box, Image, Button } from '@chakra-ui/react'
import { url } from 'inspector'
interface ISlotGameRecentItem {
  bigbgUrl: string
  smallbgUrl: string
  imageUrl: string
  price: number
}

const SlotGameRecentItem = ({
  bigbgUrl,
  smallbgUrl,
  imageUrl,
  price,
}: ISlotGameRecentItem) => {
  return (
    <Flex
      bg={bigbgUrl}
      direction={'column'}
      rounded={15}
      width="160px"
      height="160px"
      justifyContent={'center'}
      alignItems={'center'}
      padding={'2px'}
    >
      <Flex
        bg={smallbgUrl}
        direction={'column'}
        height={'full'}
        width={'full'}
        rounded={13}
      >
        <Flex direction={'column'} alignItems={'center'}>
          <Box>
            <Image src={imageUrl} width={'100px'} height={'110px'} />
          </Box>
        </Flex>
        <Flex direction={'row'} justifyContent={'space-evenly'}>
          <Flex direction={'row'} gap={4} justifyContent={'center'} alignItems={'center'}>
            <Button
              width={'1rem'}
              borderWidth={1}
              borderRadius={'50%'}
              padding={0}
              borderColor={'#feffff'}
            >
              <Flex>
                <Image src="/assets/images/slot/play.webp" width={3} height={3} />
              </Flex>
            </Button>
            <Box
              bg={'#393839'}
              fontSize={15}
              fontWeight={'bold'}
              px={3}
              py={1}
              borderRadius={1}
              border={''}
              borderBottomRightRadius={8}
            >
              ${price.toLocaleString('us').toString()}
            </Box>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default SlotGameRecentItem
