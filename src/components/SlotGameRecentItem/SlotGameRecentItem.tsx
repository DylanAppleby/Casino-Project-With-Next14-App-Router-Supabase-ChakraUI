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
      width="145px"
      height="145px"
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
            <Image src={imageUrl} width={'80px'} height={'100px'} />
          </Box>
        </Flex>
        <Flex direction={'row'} justifyContent={'space-evenly'}>
          <Flex direction={'row'} gap={5} justifyContent={'center'} alignItems={'center'}>
            <Button
              rounded={'full'}
              border={'1px'}
              marginY={-10}
              minWidth={'30px'}
              height={'45px'}
            >
              <Image src="/assets/images/slot/play.webp" width={3} height={3} />
            </Button>
            <Box
              bg={'#393839'}
              fontSize={'14px'}
              fontWeight={'bold'}
              px={2}
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
