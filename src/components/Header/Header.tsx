'use client'
import Image from 'next/image'
import { useState, useEffect } from 'react'

import {
  Box,
  Stack,
  Flex,
  IconButton,
  Text,
  Tag,
  Collapse,
  useColorModeValue,
  useColorMode,
  useDisclosure,
  Button,
  Badge,
  Container,
  Menu,
  MenuProps,
  MenuButton,
  MenuList,
  MenuItem,
  Avatar,
  Switch,
  Input,
  InputGroup,
  InputRightElement,
  Spacer,
  MenuDivider
} from '@chakra-ui/react'

import { HamburgerIcon, CloseIcon, CheckIcon } from '@chakra-ui/icons'
import { useRouter } from 'next/navigation'

import UserModal from '../auth/UserModal'
import Login from '../auth/Login'
import Register from '../auth/Register'

import { HEADER_NAV_ITEMS } from '@/constants/navItems'

import { INavBar, TNavItem } from '@/types/navItem'
import Link from 'next/link'
import { useSession, useSupabase } from '@/contexts/supabase-provider'

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
            color={useColorModeValue('gray.600', 'gray.200')}
            bgColor={useColorModeValue('white', NavbarBgColor)}
            _hover={{
              textDecoration: 'none',
              color: useColorModeValue('gray.800', 'gray.50'),
              bgColor: useColorModeValue('gray.200', '#FFFFFF05'),
            }}
          >
            {headerNavItem.label}
            {Boolean(headerNavItem.isNew) && (
              <Tag
                size="sm"
                pt={0.5}
                bg={useColorModeValue('yellow.300', 'yellow.500')}
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
    <Text fontWeight={600} color={useColorModeValue('gray.600', 'gray.200')}>
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
      bg={useColorModeValue('white', 'gray.800')}
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
  const handleLogOut = async () => {
    await supabase.auth.signOut().then(router.refresh)
  }
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

  useEffect(() => {
    onCloseLogin()
    onCloseRegister()
  }, [session])

  return (
    <header className="header">
      <Box
        width="full"
        height="3.75rem"
        bg={useColorModeValue('white', NavbarBgColor)}
        color={useColorModeValue('gray.600', 'white')}
      >
        <Container maxW={'container.xl'} height={'full'}>
          <Flex
            height="full"
            width="full"
            justifyContent="center"
            borderBottom={1}
            borderStyle={'solid'}
            borderColor={useColorModeValue('gray.200', 'gray.900')}
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
                    as="a"
                    href="/"
                  >
                    <Image
                      src={`${process.env.NEXT_PUBLIC_SITE_URL}/assets/images/logo.webp`}
                      alt="Wincrate Logo"
                      width="128"
                      height="23"
                    />
                  </Flex>

                  <Box display={{ base: 'none', md: 'flex' }}>
                    <DesktopNav navItems={HEADER_NAV_ITEMS} />
                  </Box>
                </Flex>
              </Flex>

              <Flex gap={2} justifyContent="center" alignItems="center">
                {/* <Flex
                  rounded="full"
                  h={{ base: '1.875rem' }}
                  borderWidth={2}
                  borderColor={useColorModeValue('gray.400', 'gray.700')}
                  color={useColorModeValue('gray.400', 'gray.600')}
                  fontSize="small"
                  fontWeight="medium"
                  alignItems="center"
                  justifyContent="space-between"
                  pl={2}
                  pr={1.5}
                >
                  <Box display="inline-flex">
                    <Box color={useColorModeValue('gray.600', 'gray.400')}>
                      ${Number(24046).toLocaleString('us')}
                    </Box>
                    .43
                  </Box>
                  <Flex
                    h={4}
                    w={4}
                    alignItems="center"
                    justifyContent="center"
                    fontSize={'md'}
                    lineHeight="1rem"
                    fontWeight="bold"
                    color={useColorModeValue('white', 'white')}
                    bg={'orange'}
                    rounded="full"
                    pb={0.75}
                    cursor="pointer"
                    ml={4}
                  >
                    +
                  </Flex>
                </Flex> */}
                {!session &&
                  <Flex gap={2}>
                    <Button bg={'none'} onClick={onOpenLogin}>
                      Login
                    </Button>
                    <Button
                      bg={useColorModeValue('yellow.300', 'yellow.500')}
                      onClick={onOpenRegister}
                    >
                      Register
                    </Button>
                  </Flex>
                }
                {session && 
                  <Flex fontSize={'18px'} fontWeight={'800'}>
                    <Menu closeOnSelect={false} autoSelect={false}>
                      <MenuButton>
                        <Avatar size='sm' src='https://bit.ly/broken-link' />
                      </MenuButton>
                      <MenuList>
                        <MenuItem>
                          <Link href={'/account'}>
                            <Flex gap='20'>
                              <Box>
                                <Avatar size='xs' src='https://bit.ly/broken-link' marginRight={2}/>
                                rich_ant
                              </Box>
                              <Spacer />
                              <Box bgColor={'rgba(56, 161, 105, 0.6)'} color={'white'} paddingX={2} borderRadius={4}>
                                0
                              </Box>
                            </Flex>
                          </Link>
                        </MenuItem>
                        <MenuDivider />
                        <MenuItem>
                          <Input type='text' placeholder='Promotion code' />
                          <Box marginLeft={3}><CheckIcon color={useColorModeValue('black', 'white')} /></Box>
                        </MenuItem>
                        <MenuDivider />
                        <MenuItem onClick={toggleColorMode}>
                          <Flex gap='20'>
                              <Box>Dark Mode</Box>
                              <Spacer />
                              <Box>{colorMode === 'light' ? <Switch /> : <Switch isChecked />}</Box>
                          </Flex>
                        </MenuItem>
                        <MenuDivider />
                        <MenuItem onClick={handleLogOut}>
                          Sign out
                        </MenuItem>
                      </MenuList>
                    </Menu>
                  </Flex>
                }
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
      </Box>
    </header>
  )
}

export default Header
