'use client'

import { ReactNode } from 'react'
import {
  Box,
  Container,
  SimpleGrid,
  Stack,
  Text,
  Flex,
  useColorModeValue,
  Divider,
} from '@chakra-ui/react'
import Image from 'next/image'

const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
      {children}
    </Text>
  )
}

const Footer = () => {
  const thisYear = new Date().getFullYear()
  return (
    <footer>
      <Box
        bg={useColorModeValue('white', '#1f1f1f')}
        color={useColorModeValue('gray.700', 'gray.200')}
        pt={10}
      >
        <Container maxW={'container.xl'}>
          <Flex direction="column">
            <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
              <Stack align={'flex-start'}>
                <ListHeader>About</ListHeader>
                <Box as="a" href={'#'} color="#75728c">
                  All Sports
                </Box>
                <Box as="a" href={'#'} color="#75728c">
                  Support
                </Box>
                <Box as="a" href={'#'} color="#75728c">
                  About Us
                </Box>
                <Box as="a" href={'#'} color="#75728c">
                  FAQ's
                </Box>
              </Stack>
              <Stack align={'flex-start'}>
                <ListHeader>Social Casino</ListHeader>
                <Box as="a" href={'#'} color="#75728c">
                  Games
                </Box>
                <Box as="a" href={'#'} color="#75728c">
                  VIP Club
                </Box>
                <Box as="a" href={'#'} color="#75728c">
                  Affiliate Program
                </Box>
              </Stack>
              <Stack align={'flex-start'}>
                <ListHeader>Community</ListHeader>
                <Box as="a" href={'#'} color="#75728c">
                  Twitter
                </Box>
                <Box as="a" href={'#'} color="#75728c">
                  instagram
                </Box>
              </Stack>
              <Stack align={'flex-start'}>
                <ListHeader>Support</ListHeader>
                <Box as="a" href={'#'} color="#75728c">
                  Fairness
                </Box>
                <Box as="a" href={'#'} color="#75728c">
                  Affiliate
                </Box>
                <Box as="a" href={'#'} color="#75728c">
                  Addicted to Gaming?
                </Box>
                <Box as="a" href={'#'} color="#75728c">
                  Live Support
                </Box>
                <Box as="a" href={'#'} color="#75728c">
                  Help Center
                </Box>
              </Stack>
            </SimpleGrid>
            <Box py={10} width="full">
              <Flex
                position="relative"
                width="full"
                direction={'column'}
                alignItems={'center'}
                gap={6}
              >
                <Divider
                  orientation="horizontal"
                  bgColor={useColorModeValue('gray.300', 'gray.700')}
                />
                <Image
                  src={`${process.env.NEXT_PUBLIC_SITE_URL}/assets/images/logo.webp`}
                  alt="Wincrate Logo"
                  width="128"
                  height="23"
                />
                <Divider
                  orientation="horizontal"
                  bgColor={useColorModeValue('gray.300', 'gray.700')}
                />
              </Flex>
              <Text pt={6} fontSize={'sm'} textAlign={'center'}>
                © {thisYear} Wincrate | All rights reserved
              </Text>
            </Box>
          </Flex>
        </Container>
      </Box>
    </footer>
  )
}

export default Footer
