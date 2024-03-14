'use client'
import { useState, useEffect } from 'react'

import {
  Box,
  Stack,
  Flex,
  IconButton,
  Text,
  Tag,
  Collapse,
  useDisclosure,
  Button,
  Container,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Avatar,
  Switch,
  Input,
  Spacer,
  MenuDivider,
  useColorModeValue,
  useColorMode,
  Image,
} from '@chakra-ui/react'

import { HamburgerIcon, CloseIcon, CheckIcon, InfoIcon } from '@chakra-ui/icons'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { useSession, useSupabase } from '@/contexts/supabase-provider'

import UserModal from '../auth/UserModal'
import CartModal from '../CartModal'
import DepositModal from '../DepositModal'
import Login from '../auth/Login'
import Register from '../auth/Register'

import { HEADER_NAV_ITEMS } from '@/constants/navItems'

import { INavBar, TNavItem } from '@/types/navItem'
import CryptoSelectContainer from '@/containers/CryptoSelectContainer'

const NavbarBgColor = '#1F1F1F'

const DesktopNav = (props: INavBar) => {
  const { navItems } = props

  return (
    <Stack direction={'row'} spacing={{ base: 0, md: 2, lg: 4 }}>
      {navItems?.map((headerNavItem, index) => (
        <Link href={headerNavItem.href ?? '#'} key={headerNavItem.label + index}>
          <Button
            px={{ md: 2, lg: 4 }}
            fontSize={'md'}
            fontWeight={600}
            color={'gray.200'}
            bgColor={NavbarBgColor}
            _hover={{
              textDecoration: 'none',
              color: 'gray.50',
              bgColor: '#FFFFFF05',
            }}
          >
            {headerNavItem.label}
            {Boolean(headerNavItem.isNew) && (
              <Tag
                size="sm"
                pt={0.5}
                bg={'yellow.500'}
                ml={2}
                color={'gray.800'}
                rounded="full"
              >
                New
              </Tag>
            )}
          </Button>
        </Link>
      ))}
    </Stack>
  )
}

const MobileNavItem = ({ href, label }: TNavItem) => (
  <Box
    py={2}
    justifyContent="space-between"
    alignItems="center"
    _hover={{
      textDecoration: 'none',
    }}
  >
    <Text fontWeight={600} color={'gray.200'}>
      {label}
    </Text>
  </Box>
)

const MobileNav = (props: INavBar) => {
  const { navItems } = props

  return (
    <Stack
      position={'relative'}
      zIndex={999}
      bg={'gray.800'}
      p={4}
      display={{ md: 'none' }}
    >
      {navItems?.map((headerNavItem, index) => (
        <Link href={headerNavItem.href ?? '#'} key={headerNavItem.label + index}>
          <MobileNavItem {...headerNavItem} />
        </Link>
      ))}
    </Stack>
  )
}

const Header = () => {
  const { isOpen, onToggle } = useDisclosure()
  const { colorMode, toggleColorMode } = useColorMode()

  const session = useSession()
  const supabase = useSupabase()
  const router = useRouter()

  const {
    isOpen: isOpenLogin,
    onOpen: onOpenLogin,
    onClose: onCloseLogin,
  } = useDisclosure()
  const {
    isOpen: isOpenRegister,
    onOpen: onOpenRegister,
    onClose: onCloseRegister,
  } = useDisclosure()
  const { isOpen: isOpenCart, onOpen: onOpenCart, onClose: onCloseCart } = useDisclosure()
  const {
    isOpen: isOpenDeposit,
    onOpen: onOpenDeposit,
    onClose: onCloseDeposit,
  } = useDisclosure()

  const handleLogOut = async () => {
    await supabase.auth.signOut().then(router.refresh)
  }

  useEffect(() => {
    onCloseLogin()
    onCloseRegister()
  }, [session])

  return (
    <header className="header">
      <Box width="full" height="3.75rem" bg={NavbarBgColor} color={'white'}>
        <Container maxW={'container.xl'} height={'full'}>
          <Flex
            height="full"
            width="full"
            justifyContent="center"
            borderBottom={1}
            borderStyle={'solid'}
            borderColor={'gray.900'}
          >
            <Flex width="full" align="center" justifyContent="space-between">
              <Flex>
                <Flex
                  flex={{ base: 1, md: 'auto' }}
                  ml={{ base: -2 }}
                  display={{ base: 'flex', md: 'none' }}
                >
                  <IconButton
                    onClick={onToggle}
                    icon={
                      isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
                    }
                    variant={'ghost'}
                    aria-label={'Toggle Navigation'}
                  />
                </Flex>

                <Flex
                  justify={{ base: 'center', md: 'start' }}
                  gap={{ base: 0, md: 6, lg: 12 }}
                >
                  <Flex
                    width={{ base: 32 }}
                    bg="darkgray.500"
                    justifyContent={'center'}
                    alignItems={'center'}
                    cursor="pointer"
                  >
                    <Link href={'/'}>
                      <Image
                        src={`${process.env.NEXT_PUBLIC_SITE_URL}/assets/images/logo.webp`}
                        alt="Wincrate Logo"
                        width="128"
                        height="23"
                      />
                    </Link>
                  </Flex>
                  <Box display={{ base: 'none', md: 'flex' }}>
                    <DesktopNav navItems={HEADER_NAV_ITEMS} />
                  </Box>
                </Flex>
              </Flex>

              <Flex gap={2} justifyContent="center" alignItems="center">
                {!session && (
                  <Flex gap={2}>
                    <Button bg={'transparent'} onClick={onOpenLogin} color={'#eeeee8'}>
                      Login
                    </Button>
                    <Button
                      bg={'yellow.500'}
                      _hover={{ bg: 'yellow.400' }}
                      onClick={onOpenRegister}
                      color={'#eeeee8'}
                    >
                      Register
                    </Button>
                  </Flex>
                )}
                {session && (
                  <>
                    <Button
                      rounded={'full'}
                      height={'2rem'}
                      width={'52px'}
                      fontSize={'14'}
                      onClick={onOpenCart}
                      display={{ base: 'none', md: 'block' }}
                      px={3}
                    >
                      Cart
                    </Button>
                    <Button
                      rounded={'full'}
                      height={'2rem'}
                      width={'110px'}
                      fontSize={'14'}
                      onClick={onOpenDeposit}
                      px={3}
                      bg={'#d3a03e'}
                      _hover={{ bg: 'yellow.400' }}
                    >
                      Deposit
                    </Button>
                    <Flex fontSize={'18px'} fontWeight={'800'}>
                      <Menu closeOnSelect={false} autoSelect={false}>
                        <MenuButton>
                          <Avatar size="sm" src="https://bit.ly/broken-link" />
                        </MenuButton>
                        <MenuList>
                          <MenuItem>
                            <Link href={'/account'}>
                              <Flex gap="20">
                                <Box>
                                  <Avatar
                                    size="xs"
                                    src="https://bit.ly/broken-link"
                                    marginRight={2}
                                  />
                                  rich_ant
                                </Box>
                                <Spacer />
                                <Box
                                  bgColor={'rgba(56, 161, 105, 0.6)'}
                                  color={'white'}
                                  paddingX={2}
                                  borderRadius={4}
                                >
                                  0
                                </Box>
                              </Flex>
                            </Link>
                          </MenuItem>
                          <MenuDivider />
                          <MenuItem>
                            <Input type="text" placeholder="Promotion code" />
                            <Box marginLeft={3}>
                              <CheckIcon color={useColorModeValue('black', 'white')} />
                            </Box>
                          </MenuItem>
                          <MenuDivider />
                          <MenuItem onClick={toggleColorMode}>
                            <Flex gap="20">
                              <Box>Dark Mode</Box>
                              <Spacer />
                              <Box>
                                {colorMode === 'light' ? (
                                  <Switch />
                                ) : (
                                  <Switch isChecked />
                                )}
                              </Box>
                            </Flex>
                          </MenuItem>
                          <MenuDivider />
                          <MenuItem onClick={handleLogOut}>Sign out</MenuItem>
                        </MenuList>
                      </Menu>
                    </Flex>
                  </>
                )}
              </Flex>
            </Flex>
          </Flex>
        </Container>

        <Collapse in={isOpen} animateOpacity>
          <MobileNav navItems={HEADER_NAV_ITEMS} />
        </Collapse>
        <UserModal isOpen={isOpenLogin} onClose={onCloseLogin}>
          <Login />
        </UserModal>
        <UserModal isOpen={isOpenRegister} onClose={onCloseRegister}>
          <Register />
        </UserModal>
        <CartModal isOpen={isOpenCart} onClose={onCloseCart}>
          <Flex direction={'column'} gap={4} width={'full'}>
            <Flex justifyContent={'space-between'}>
              <Link href={'/cart'}>
                <Text fontSize={'14'} fontWeight={'bold'}>
                  View Full Cart
                </Text>
              </Link>
              <Text fontWeight={'bold'}>$0.00</Text>
            </Flex>
            <Flex
              bg={'#35424b'}
              justifyContent={'center'}
              alignItems={'center'}
              direction={'column'}
              height={'200px'}
              px={5}
            >
              <Box mb={5}>
                <InfoIcon width={'40px'} height={'40px'} color={'#d3a03e'} />
              </Box>
              <Text fontSize={'18'} fontWeight={'bold'}>
                Your Cart is Empty
              </Text>
              <Text fontSize={'16'} textAlign={'center'}>
                Open packs or battle to earn XP and rewards!
              </Text>
            </Flex>
            <Flex direction={'row-reverse'} py={4}>
              <Button onClick={onCloseCart}>Close</Button>
            </Flex>
          </Flex>
        </CartModal>
        <DepositModal isOpen={isOpenDeposit} onClose={onCloseDeposit}>
          <Flex direction={'column'} width={'full'}>
            <Flex
              direction={'column'}
              justifyContent={'center'}
              alignItems={'center'}
              bg={'rgba(0, 0, 0, 0.3)'}
              height={'full'}
              px={5}
              py={5}
              rounded={10}
              width={'full'}
            >
              <Text fontSize={16} fontWeight={'bold'} mb={5}>
                Cash Deposits Disabled
              </Text>
              <Text fontSize={16} textAlign={'center'} width={'full'} mb={5}>
                A credit card payment method was used that requires verification. Please
                verify your card to unlock this payment method for future use.
              </Text>
              <Link href={'/card-verification'}>
                <Button>Verify Card</Button>
              </Link>
            </Flex>
            <Flex direction={'column'} mt={6}>
              <Text fontSize={'16px'} fontWeight={'bold'} mb={3}>
                Crypto
              </Text>
              <CryptoSelectContainer />
            </Flex>
            <Text align={'center'} fontSize={'10.5'} fontWeight={'bold'}>
              Cryptocurrency deposits are generally credited after 3 confirmations. Please
              allow up to 30 minutes for funds to appear in your account. In most cases,
              funds will appear within 5 minutes. There is no mechanism to withdraw
              deposited funds. All funds must be used to purchase. Credit card deposits
              are not eligible for deposit bonuses and are subject to card verification.
            </Text>
            <Flex width={'full'} gap={2} mt={5}>
              <Input
                type="text"
                id="search"
                placeholder="Enter Referral Code"
                borderWidth={2}
                borderColor={'#343335'}
                color={'#4A4749'}
                rounded={6}
                textColor={'#888687'}
                _focus={{
                  borderColor: 'transparent',
                  outline: 'none',
                  boxShadow: '0 0 0 2px #d3a03e',
                }}
              />
              <Button bg={'#d0a249'} _hover={{ bg: 'yellow.400' }}>
                Submit
              </Button>
            </Flex>
          </Flex>
        </DepositModal>
      </Box>
    </header>
  )
}

export default Header
