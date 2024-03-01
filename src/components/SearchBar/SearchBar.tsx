'use client'

import {
  Flex,
  Box,
  useColorModeValue,
  FormControl,
  InputGroup,
  Input,
  InputLeftElement,
} from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'
import Image from 'next/image'

const SearchBar = () => {
  return (
    <Flex
      direction={{ base: 'column-reverse', md: 'row' }}
      justifyContent={'space-between'}
      gap={8}
      width="full"
      my={8}
    >
      <Flex gap={2}>
        <Flex
          rounded="full"
          h={{ base: '2.5rem' }}
          px={'0.75rem'}
          gap={3}
          borderWidth={2}
          borderColor={useColorModeValue('gray.400', 'gray.700')}
          color={useColorModeValue('gray.400', 'gray.600')}
          fontSize="small"
          fontWeight="medium"
          alignItems="center"
          justifyContent="space-between"
          cursor="pointer"
        >
          <Box height="1.25rem" minWidth="0.8125rem">
            <Image
              src="/assets/images/flash.png"
              alt="flash"
              width="13"
              height="18"
              style={{ width: 13, height: 18 }}
            />
          </Box>
          <Box display="inline-flex" fontSize="initial">
            New
          </Box>
        </Flex>
        <Flex
          rounded="full"
          h={{ base: '2.5rem' }}
          px={'0.75rem'}
          gap={3}
          borderWidth={2}
          borderColor={useColorModeValue('gray.400', 'gray.700')}
          color={useColorModeValue('gray.400', 'gray.600')}
          fontSize="small"
          fontWeight="medium"
          alignItems="center"
          justifyContent="space-between"
          cursor="pointer"
        >
          <Box height="1.25rem" minWidth="0.8125rem">
            <Image
              src="/assets/images/flame.png"
              alt="flame"
              width="13"
              height="18"
              style={{ width: 13, height: 18 }}
            />
          </Box>
          <Box display="inline-flex" fontSize="initial">
            Hot
          </Box>
        </Flex>
        <Flex
          rounded="full"
          h={{ base: '2.5rem' }}
          px={'0.75rem'}
          gap={3}
          borderWidth={2}
          borderColor={useColorModeValue('gray.400', 'gray.700')}
          color={useColorModeValue('gray.400', 'gray.600')}
          fontSize="small"
          fontWeight="medium"
          alignItems="center"
          justifyContent="space-between"
          cursor="pointer"
        >
          <Box height="1.25rem" minWidth="1rem">
            <Image
              src="/assets/images/arrow-down.png"
              alt="arrow-down"
              width="13"
              height="18"
              style={{ width: 16, height: 17 }}
            />
          </Box>
          <Box display="inline-flex" fontSize="initial" whiteSpace="nowrap">
            Price {'>'} $500
          </Box>
        </Flex>
      </Flex>
      <Flex>
        <FormControl>
          <InputGroup>
            <InputLeftElement width="2.5rem">
              <Box h="2rem" fontSize="sm" py="0.25rem">
                <SearchIcon />
              </Box>
            </InputLeftElement>
            <Input
              type="text"
              id="search"
              placeholder="Search"
              borderWidth={2}
              borderColor={useColorModeValue('gray.400', 'gray.700')}
              borderRadius={'full'}
            />
          </InputGroup>
        </FormControl>
      </Flex>
    </Flex>
  )
}

export default SearchBar
