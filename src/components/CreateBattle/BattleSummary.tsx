'use client'

import { Flex, Button, Text } from '@chakra-ui/react'

const selectedPacks = () => {
  return (
    <Flex direction={'column'} gap={5}>
      <Text fontSize={'20px'} fontWeight={'black'}>
        Battle Summary
      </Text>
      <Flex
        direction={'row'}
        gap={2}
        width={'full'}
        bgColor={'rgba(48, 46, 48, 0.3)'}
        padding={'25px'}
        rounded={'10px'}
        justifyContent={'center'}
        alignItems={'space-between'}
      >
        <Flex
          direction={'column'}
          fontWeight={'bold'}
          gap={2}
          fontSize={'16px'}
          whiteSpace={'nowrap'}
        >
          <Text>Packs / Rounds:</Text>
          <Text>Players (2):</Text>
          <Text>Total Cost:</Text>
        </Flex>
        <Flex width={'full'}></Flex>
        <Flex
          direction={'column'}
          fontWeight={'bold'}
          gap={2}
          fontSize={'16px'}
          alignItems={'flex-end'}
        >
          <Text>0</Text>
          <Text>1 vs 1</Text>
          <Text>$0.00</Text>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default selectedPacks
