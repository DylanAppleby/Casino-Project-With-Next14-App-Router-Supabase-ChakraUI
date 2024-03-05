import {
  Box,
  Flex,
  Text,
  Tag,
  Stack,
  Icon,
  Button,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { NavItem } from '@/types/navItem'
import { HEADER_NAV_ITEMS } from '@/constants/navItems'

const DesktopNav = () => {
  const popoverContentBgColor = useColorModeValue('white', 'gray.800')

  return (
    <Stack direction={'row'} spacing={{ base: 0, md: 2, lg: 4 }}>
      {HEADER_NAV_ITEMS.map((headerNavItem, index) => (
        <Box key={headerNavItem.label + index}>
          <Popover trigger={'hover'} placement={'bottom-start'}>
            <PopoverTrigger>
              <Button
                as="a"
                px={{ md: 2, lg: 4 }}
                href={headerNavItem.href ?? '#'}
                fontSize={{ md: 'md', lg: 'lg' }}
                fontWeight={500}
                color={useColorModeValue('gray.600', 'gray.200')}
                bgColor={useColorModeValue('white', '#1f1f1f')}
                _hover={{
                  textDecoration: 'none',
                  color: useColorModeValue('gray.800', 'gray.50'),
                  bgColor: useColorModeValue('gray.200', 'gray.900'),
                }}
              >
                {headerNavItem.label}
                {headerNavItem.isNew ? (
                  <Tag
                    size={'sm'}
                    bg={useColorModeValue('yellow.300', 'yellow.500')}
                    ml={2}
                    color={'gray.800'}
                    rounded="full"
                  >
                    New
                  </Tag>
                ) : (
                  ''
                )}
              </Button>
            </PopoverTrigger>

            {headerNavItem.children && (
              <PopoverContent
                border={0}
                boxShadow={'xl'}
                bg={popoverContentBgColor}
                p={4}
                rounded={'xl'}
                minW={'sm'}
              >
                <Stack>
                  {headerNavItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  )
}

const DesktopSubNav = ({ label, href, subLabel }: NavItem) => {
  return (
    <Box
      as="a"
      href={href}
      role={'group'}
      display={'block'}
      p={2}
      rounded={'md'}
      _hover={{ bg: useColorModeValue('pink.50', 'gray.900') }}
    >
      <Stack direction={'row'} align={'center'}>
        <Box>
          <Text
            transition={'all .3s ease'}
            _groupHover={{ color: 'pink.400' }}
            fontWeight={500}
          >
            {label}
          </Text>
          <Text fontSize={'sm'}>{subLabel}</Text>
        </Box>
        <Flex
          transition={'all .3s ease'}
          transform={'translateX(-10px)'}
          opacity={0}
          _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
          justify={'flex-end'}
          align={'center'}
          flex={1}
        >
          <Icon color={'pink.400'} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Box>
  )
}

export default DesktopNav
