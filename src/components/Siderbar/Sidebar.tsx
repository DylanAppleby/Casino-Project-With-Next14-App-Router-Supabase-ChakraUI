'use client'

import { usePathname } from 'next/navigation'

import React from 'react'
import {
  Button,
  Box,
  Flex,
  Text,
  Drawer,
  DrawerContent,
  useDisclosure,
  BoxProps,
  FlexProps,
} from '@chakra-ui/react'
import { ACCOUNT_SIDEBAR_ITEMS } from '@/constants/navItems'
import { SETTING_SIDEBAR_ITEMS } from '@/constants/navItems'
import Link from 'next/link'

const Sidebar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <Flex direction={'column'}>
      <Box bg={'transparent'} display={{ base: 'none', md: 'none', lg: 'flex' }}>
        <SidebarContent
          onClose={() => onClose}
          display={{ base: 'none', md: 'none', lg: 'block' }}
        />
        <Drawer
          isOpen={isOpen}
          placement="left"
          onClose={onClose}
          returnFocusOnClose={true}
          onOverlayClick={onClose}
        >
          <DrawerContent>
            <SidebarContent onClose={onClose} />
          </DrawerContent>
        </Drawer>
      </Box>
      <MobileNav display={{ base: 'flex', md: 'flex', lg: 'none' }} onOpen={onOpen} />
    </Flex>
  )
}

interface SidebarProps extends BoxProps {
  onClose: () => void
}

const SidebarContent = ({ onClose }: SidebarProps) => {
  return (
    <Flex direction={'column'} gap={2}>
      <Text fontWeight={'bold'} fontSize={14} color={'#7a7b7f'}>
        Account
      </Text>
      {ACCOUNT_SIDEBAR_ITEMS.map((accountSidebarItem, index) => (
        <NavItem
          key={accountSidebarItem.label + index}
          url={accountSidebarItem.href}
          label={accountSidebarItem.label}
        />
      ))}
      <Text fontWeight={'bold'} fontSize={14} color={'#7a7b7f'}>
        Setting
      </Text>
      {SETTING_SIDEBAR_ITEMS.map((settingSidebarItem, index) => (
        <NavItem
          key={settingSidebarItem.label + index}
          url={settingSidebarItem.href}
          label={settingSidebarItem.label}
        />
      ))}
    </Flex>
  )
}

interface NavItemProps extends FlexProps {
  url: string
  label: string
}
const NavItem = ({ url, label, ...rest }: NavItemProps) => {
  const path = usePathname()

  const isActive = path === url
  return (
    <Link href={url}>
      <Box style={{ textDecoration: 'none' }} _focus={{ boxShadow: 'none' }}>
        <Flex
          align="center"
          py="2"
          px="3"
          whiteSpace={'nowrap'}
          rounded={'full'}
          width={'232px'}
          cursor="pointer"
          _hover={{
            bg: '#34383c',
            color: 'white',
          }}
          bg={isActive ? '#34383c' : 'transparent'}
          color={isActive ? 'white' : 'inherit'}
          {...rest}
          fontWeight={'bold'}
        >
          {label}
        </Flex>
      </Box>
    </Link>
  )
}

interface MobileProps extends FlexProps {
  onOpen: () => void
}
const MobileNav = ({ onOpen, ...rest }: MobileProps) => {
  return (
    <Flex alignItems="center" justifyContent="flex-start" {...rest}>
      <Button variant="outline" onClick={onOpen} aria-label="open menu">
        Account
      </Button>
    </Flex>
  )
}

export default Sidebar
