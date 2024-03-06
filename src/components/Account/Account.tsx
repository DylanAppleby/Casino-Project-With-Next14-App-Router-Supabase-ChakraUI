'use client'
import { Flex, Text, Box, Button, Input, useColorModeValue } from '@chakra-ui/react'
import { CopyIcon } from '@chakra-ui/icons'
const Account = () => {
  return (
    <Flex width={'full'} direction={'column'} justifyContent={'center'}>
      <Flex justifyContent={'space-between'} width={'full'} alignItems={'center'} mb={4}>
        <Text fontSize={'24px'} fontWeight={'bold'}>
          Profile
        </Text>
        <Flex gap={2} justifyContent={'center'} alignItems={'center'}>
          <Text>cloqir8zr004vl417i9a9r5qo</Text>
          <Button bg={'transparent'} p={0}>
            <CopyIcon />
          </Button>
        </Flex>
      </Flex>
      <hr />
      <Flex
        direction={'column'}
        gap={6}
        my={6}
        alignItems={{
          base: 'center',
          md: 'center',
          lg: 'start',
        }}
      >
        <Flex direction={'column'} gap={2}>
          <Flex gap={2} direction={'column'}>
            <Text fontWeight={'bold'}>Profile picture</Text>
            <Flex gap={2}>
              <Box width={148} height={148} borderWidth={2} rounded={8}></Box>
              <Flex direction={'column-reverse'} gap={2}>
                <Button width={'180px'}>Cenerate Random</Button>
                <Button width={'110px'}>Upload</Button>
              </Flex>
            </Flex>
          </Flex>
          <Flex direction={'column'}>
            <Text fontSize={14} whiteSpace={'nowrap'}>
              The maxiumum upload size is 200 KB. Accepted formats
            </Text>
            <Text fontSize={14} whiteSpace={'nowrap'}>
              are jpg, png, and gif.
            </Text>
          </Flex>
        </Flex>
        <Flex direction={'column'} gap={2}>
          <Flex gap={2} direction={'column'}>
            <Text fontWeight={'bold'}>Username</Text>
            <Input placeholder="white_panda" width={'360px'} />
          </Flex>
          <Flex direction={'column'}>
            <Text fontSize={14} whiteSpace={'nowrap'}>
              Your username must be greater than 3 characters and less
            </Text>
            <Text fontSize={14} whiteSpace={'nowrap'}>
              than 20 characters. It can only contain letters, numbers, and
            </Text>
            <Text fontSize={14} whiteSpace={'nowrap'}>
              underscores. Your{' '}
              <Text as={'span'} fontStyle={'italic'} whiteSpace={'nowrap'}>
                unique
              </Text>{' '}
              username must must contain at
            </Text>
            <Text fontSize={14}>least one letter.</Text>
          </Flex>
        </Flex>
        <Button bg={useColorModeValue('yellow.300', 'yellow.500')} width={'80px'}>
          Save
        </Button>
      </Flex>
    </Flex>
  )
}
export default Account
