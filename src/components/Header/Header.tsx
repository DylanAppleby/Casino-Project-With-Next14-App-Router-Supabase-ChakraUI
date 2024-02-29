'use client'

import {
  Box,
  Flex,
  Image,
  IconButton,
  Button,
  Stack,
  Collapse,
  Center,
  useColorModeValue,
  useColorMode,
  useDisclosure,
  Menu,
  MenuItem,
  MenuButton,
  MenuList,
  MenuDivider,
  Avatar,
} from '@chakra-ui/react'

import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'

import DesktopNav from './DesktopNav'
import MobileNav from './MoblieNav'

const Header = () => {
  const { isOpen, onToggle } = useDisclosure()
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <Box>
      <Flex
        bg={useColorModeValue('white', 'gray.800')}
        color={useColorModeValue('gray.600', 'white')}
        minH={'60px'}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.900')}
        align={'center'}
      >
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
        <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
          <Box p={4} bg="darkgray.500" display="flex">
            <Image
              src="assets/images/logo.png"
              alt="Your Logo"
              width="108px"
              height="18px"
            />
          </Box>

          <Flex display={{ base: 'none', md: 'flex' }} ml={10} align={'center'}>
            <DesktopNav />
          </Flex>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={'flex-end'}
          direction={'row'}
          spacing={6}
        >
          <Button
            as={'a'}
            display={{ base: 'none', md: 'inline-flex' }}
            fontSize={'sm'}
            fontWeight={400}
            color={'white'}
            bg="#2f3236"
            borderRadius="20px"
            href={'#'}
            _hover={{
              bg: '#3a3e42',
            }}
          >
            Login
          </Button>
          <Button
            as={'a'}
            display={{ base: 'none', md: 'inline-flex' }}
            fontSize={'sm'}
            fontWeight={400}
            color={'white'}
            bg="#5195de"
            borderRadius="20px"
            href={'#'}
            _hover={{
              bg: '#6aa2f8',
            }}
          >
            Register
          </Button>
        </Stack>
        <Stack direction={'row'} spacing={7}>
          <Button onClick={toggleColorMode}>
            {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
          </Button>

          <Menu>
            <MenuButton
              as={Button}
              rounded={'full'}
              variant={'link'}
              cursor={'pointer'}
              minW={0}
            >
              <Avatar
                size={'sm'}
                src={'https://avatars.dicebear.com/api/male/username.svg'}
              />
            </MenuButton>
            <MenuList alignItems={'center'}>
              <br />
              <Center>
                <Avatar
                  size={'2xl'}
                  src={'https://avatars.dicebear.com/api/male/username.svg'}
                />
              </Center>
              <br />
              <Center>
                <p>Username</p>
              </Center>
              <br />
              <MenuDivider />
              <MenuItem>Your Servers</MenuItem>
              <MenuItem>Account Settings</MenuItem>
              <MenuItem>Logout</MenuItem>
            </MenuList>
          </Menu>
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  )
}

export default Header
