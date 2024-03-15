'use client'
import React, { useState } from 'react'
import {
  Flex,
  Box,
  FormControl,
  InputGroup,
  Input,
  InputLeftElement,
  Button,
} from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'
import Image from 'next/image'

interface ButtonProps {
  id: number
  label: string
  setActiveButton: (id: number) => void
  isActive: boolean
}

// Button component
const ToggleButton: React.FC<ButtonProps> = ({
  id,
  label,
  setActiveButton,
  isActive,
}) => {
  return (
    <Button
      onClick={() => setActiveButton(id)}
      rounded={{ base: 9, md: 'full', lg: 'full' }}
      h={{ base: '2.5rem' }}
      px={'0.75rem'}
      fontSize="small"
      fontWeight="medium"
      alignItems="center"
      justifyContent="space-between"
      cursor="pointer"
      bgColor={isActive ? '#d3a03e' : 'initial'}
    >
      {label}
    </Button>
  )
}

const SearchBar = () => {
  const [activeButton, setActiveButton] = useState<number>(1)

  const toggleButtonColor = (buttonId: number) => {
    setActiveButton(buttonId)
  }

  return (
    <Flex
      direction={{ base: 'column-reverse', md: 'row' }}
      justifyContent={'space-between'}
      width="full"
      gap={8}
      my={8}
    >
      <Flex gap={2}>
        <Button
          rounded={{ base: 9, md: 'full', lg: 'full' }}
          h={{ base: '2.5rem' }}
          px={'0.75rem'}
          gap={3}
          fontSize="small"
          fontWeight="medium"
          alignItems="center"
          justifyContent="center"
          cursor="pointer"
          onClick={() => toggleButtonColor(1)}
          bgColor={activeButton === 1 ? '#996d18' : '#302e30'}
          borderWidth={2}
          borderColor={activeButton === 1 ? '#dba63e' : '#4a4749'}
          _hover={{
            borderColor: activeButton === 1 ? '#dba63e' : '#4a4749',
          }}
          width={{ base: 'full', lg: 'auto' }}
          minWidth="auto"
          color={'#eeeee8'}
        >
          <Box height="1.25rem" minWidth="0.8125rem">
            <Image
              src="/assets/images/flash.webp"
              alt="flash"
              width="13"
              height="18"
              style={{ width: 13, height: 18 }}
            />
          </Box>
          <Box display="inline-flex" fontSize="initial">
            New
          </Box>
        </Button>
        <Button
          rounded={{ base: 9, md: 'full', lg: 'full' }}
          h={{ base: '2.5rem' }}
          px={'0.75rem'}
          gap={3}
          fontSize="small"
          fontWeight="medium"
          alignItems="center"
          justifyContent="center"
          cursor="pointer"
          onClick={() => toggleButtonColor(2)}
          bgColor={activeButton === 2 ? '#996d18' : '#302e30'}
          borderWidth={2}
          borderColor={activeButton === 2 ? '#dba63e' : '#4a4749'}
          _hover={{
            borderColor: activeButton === 2 ? '#dba63e' : '#4a4749',
          }}
          width={{ base: 'full', lg: 'auto' }}
          minWidth="auto"
          color={'#eeeee8'}
        >
          <Box height="1.25rem" minWidth="0.8125rem">
            <Image
              src="/assets/images/flame.webp"
              alt="flame"
              width="13"
              height="18"
              style={{ width: 13, height: 18 }}
            />
          </Box>
          <Box display="inline-flex" fontSize="initial">
            Hot
          </Box>
        </Button>
        <Button
          rounded={{ base: 9, md: 'full', lg: 'full' }}
          h={{ base: '2.5rem' }}
          px={'0.75rem'}
          gap={3}
          fontSize="small"
          fontWeight="medium"
          alignItems="center"
          justifyContent="center"
          cursor="pointer"
          onClick={() => toggleButtonColor(3)}
          bgColor={activeButton === 3 ? '#996d18' : '#302e30'}
          borderWidth={2}
          borderColor={activeButton === 3 ? '#dba63e' : '#4a4749'}
          _hover={{
            borderColor: activeButton === 3 ? '#dba63e' : '#4a4749',
          }}
          width={{ base: 'full', lg: 'auto' }}
          minWidth="auto"
          color={'#eeeee8'}
        >
          <Box height="1.25rem" minWidth="1rem">
            <Image
              src="/assets/images/arrow-down.webp"
              alt="arrow-down"
              width="13"
              height="18"
              style={{ width: 16, height: 17 }}
            />
          </Box>
          <Box display="inline-flex" fontSize="initial" whiteSpace="nowrap">
            Price {'>'} $500
          </Box>
        </Button>
      </Flex>
      <Flex>
        <FormControl>
          <InputGroup>
            <InputLeftElement width="2.5rem">
              <Box h="2rem" fontSize="sm" py="0.25rem">
                <SearchIcon color={'#888687'} />
              </Box>
            </InputLeftElement>
            <Input
              type="text"
              id="search"
              placeholder="Search"
              borderWidth={2}
              borderColor={'#4a4749'}
              color={'#4A4749'}
              borderRadius={'full'}
              textColor={'#888687'}
              _focus={{
                borderColor: 'transparent',
                outline: 'none',
                boxShadow: '0 0 0 2px #d3a03e',
              }}
              bg={'#302e30'}
            />
          </InputGroup>
        </FormControl>
      </Flex>
    </Flex>
  )
}

export default SearchBar
