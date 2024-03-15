'use client'

import { Flex, Button, Text, useDisclosure } from '@chakra-ui/react'
import SelectPackModal from '../SelectPackModal'
import { Children } from 'react'
import SearchBar from '../SearchBar'
import GiftCardContainer from '@/containers/GiftCardContainer'

const selectedPacks = () => {
  const {
    isOpen: isOpenSelectPack,
    onOpen: onOpenSelectPack,
    onClose: onCloseSelectPack,
  } = useDisclosure()

  return (
    <Flex direction={'column'} gap={5} width={'172.2px'}>
      <Text fontSize={'20px'} fontWeight={'black'}>
        Selected Pack(s)
      </Text>
      <Button
        width={'full'}
        height={'250px'}
        bgColor={'rgba(48, 46, 48, 0.3)'}
        _hover={{ bgColor: 'rgba(48, 46, 48, 0.3)' }}
        onClick={onOpenSelectPack}
      >
        <Text fontSize={'110px'} color={'rgba(255, 255, 255, 0.1)'}>
          +
        </Text>
      </Button>
      <Text fontSize={'14px'} fontWeight={'bold'} align={'center'}>
        Select Pack(s)
      </Text>
      <SelectPackModal isOpen={isOpenSelectPack} onClose={onCloseSelectPack}>
        <Flex direction={'column'}>
          <SearchBar />
          <GiftCardContainer />
        </Flex>
      </SelectPackModal>
    </Flex>
  )
}

export default selectedPacks
