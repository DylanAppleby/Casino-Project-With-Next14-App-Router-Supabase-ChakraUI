'use client'

import {
  Box,
  Flex,
  Image,
  IconButton,
  Collapse,
  useColorModeValue,
  useColorMode,
  useDisclosure,
  Button,
} from '@chakra-ui/react'

import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'

import DesktopNav from './DesktopNav'
import MobileNav from './MoblieNav'
import UserModal from '../auth/UserModal'
import Login from '../auth/Login'
import Register from '../auth/Register'

const Header = () => {
  const { isOpen, onToggle } = useDisclosure()
  const { colorMode, toggleColorMode } = useColorMode()

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

  return (
    <Box width="full" height="3.75rem">
      <Flex
        height="full"
        bg={useColorModeValue('white', 'gray.800')}
        color={useColorModeValue('gray.600', 'white')}
        justifyContent="center"
        borderBottom={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.900')}
      >
        <Flex
          width="full"
          maxWidth="1440px"
          px={{ base: 4, md: 6, lg: 10 }}
          align="center"
          justifyContent="space-between"
        >
          <Flex>
            <Flex
              flex={{ base: 1, md: 'auto' }}
              ml={{ base: -2 }}
              display={{ base: 'flex', md: 'none' }}
            >
              <IconButton
                onClick={onToggle}
                icon={isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />}
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
                <Image src="assets/images/logo.png" alt="Your Logo" width="full" />
              </Flex>

              <Box display={{ base: 'none', md: 'flex' }}>
                <DesktopNav />
              </Box>
            </Flex>
          </Flex>

          <Flex gap={2} justifyContent="center" alignItems="center">
            <Flex
              h={{ base: '1.875rem' }}
              w={{ base: '1.875rem' }}
              alignItems="center"
              justifyContent="center"
              rounded="full"
              bgColor={useColorModeValue('gray.200', 'gray.900')}
              onClick={toggleColorMode}
              cursor="pointer"
            >
              {colorMode === 'light' ? (
                <MoonIcon w={{ base: 5 }} h={{ base: 5 }} />
              ) : (
                <SunIcon w={{ base: 5 }} h={{ base: 5 }} />
              )}
            </Flex>
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
          </Flex>
        </Flex>

        <Collapse in={isOpen} animateOpacity>
          <MobileNav />
        </Collapse>
      </Flex>
      <UserModal isOpen={isOpenLogin} onClose={onCloseLogin}>
        <Login />
      </UserModal>
      <UserModal isOpen={isOpenRegister} onClose={onCloseRegister}>
        <Register />
      </UserModal>
    </Box>
  )
}

export default Header
