'use client'

import { ReactNode } from 'react'
import { Box, Container, SimpleGrid, Stack, Text, Flex, Divider } from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'

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
      <Box bg={'#1f1f1f'} color={'gray.200'} pt={10}>
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
                <Divider orientation="horizontal" bgColor="gray.700" />
                <Flex
                  direction={{ base: 'column', sm: 'row' }}
                  gap={{ base: '1rem', sm: '20rem' }}
                  alignItems={'center'}
                >
                  <Flex direction={'column'}>
                    <Text color={'#75728c'} fontWeight={'bold'}>
                      Responsible
                    </Text>
                    <Text color={'#75728c'} fontWeight={'bold'}>
                      Gaming
                    </Text>
                  </Flex>
                  <Flex>
                    <Text fontSize={'40px'} color={'#75728c'}>
                      21+
                    </Text>
                  </Flex>
                </Flex>
                <Divider orientation="horizontal" bgColor="gray.700" />
              </Flex>
              <Flex
                position="relative"
                width="full"
                direction={'column'}
                alignItems={'center'}
                gap={6}
                py={'20px'}
              >
                <Image
                  src={`${process.env.NEXT_PUBLIC_SITE_URL}/assets/images/logo.webp`}
                  alt="Wincrate Logo"
                  width="128"
                  height="23"
                />
              </Flex>
              <Text
                fontSize={'sm'}
                color={'#75728c'}
                fontWeight={'bold'}
                textAlign={'center'}
              >
                © Wincrate | All rights reserved
              </Text>
              <Flex padding={'20px'} direction={'column'} gap={'1rem'}>
                <Text
                  fontSize={'11.5px'}
                  color={'#75728c'}
                  fontWeight={'bold'}
                  align={'center'}
                >
                  Wincrate is owned and operated by Wincrate Limited, registration number
                  HE433433, registered address 28 Oktovriou, 313 Omrania BLD, Limassol,
                  CY-3105, Cryprus, Contact us at support@Wincrate.us. Wincrate is
                  authorized and regulated by the Government of Curacao and operates under
                  Licence No.8048/JAZ issued to Antillephone. Wincrate has passed all
                  compliance and is legally authorized to conduct gaming operations for
                  all games of chance.
                </Text>
                <Text
                  fontSize={'13px'}
                  color={'#75728c'}
                  fontWeight={'bold'}
                  align={'center'}
                >
                  NO PURCHASE NECESSARY to enter Sweepstakes. SWEEPSTAKES ARE VOID WHERE
                  PROHIBITED BY LAW. For detailed rules, see{' '}
                  <Link href={''} style={{ color: 'white' }}>
                    terms of service
                  </Link>
                </Text>
                <Text
                  fontSize={'13px'}
                  color={'#75728c'}
                  fontWeight={'bold'}
                  align={'center'}
                >
                  Support support@wincrate.com | Partners partners@wincrate.com | Press
                  press@wincrate.com
                </Text>
              </Flex>
            </Box>
          </Flex>
        </Container>
      </Box>
    </footer>
  )
}

export default Footer
