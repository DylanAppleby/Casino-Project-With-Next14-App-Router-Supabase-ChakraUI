import { useState } from 'react'

import {
  Stack,
  Heading,
  Box,
  FormControl,
  InputGroup,
  InputRightElement,
  Input,
  Button,
  FormHelperText,
  Link,
  Text,
  Checkbox,
  Flex,
  Divider,
  FormLabel,
  AbsoluteCenter,
  useColorModeValue,
} from '@chakra-ui/react'
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import { FcGoogle } from 'react-icons/fc'
import { Urbanist } from 'next/font/google'

const Register = () => {
  const [showPassword, setShowPassword] = useState(false)
  const handleShowClick = () => setShowPassword(!showPassword)
  return (
    <Stack flexDir="column" justifyContent="center" alignItems="center" gap={0}>
      <Flex direction="column" mb={2} py={6} px={4}>
        <Heading textAlign="center" fontSize="x-large">
          Welcome to WinCrate
        </Heading>
        <Text textAlign="center" color="gray.500">
          Sign Up to Get Started
        </Text>
      </Flex>
      <Flex justifyContent="center" alignItems="center" direction="column">
        <Flex
          direction="column"
          justifyContent="center"
          alignItems="center"
          width="350px"
        >
          <Button w="full" variant="outline" leftIcon={<FcGoogle />} height={10}>
            Sign in with Google
          </Button>
          <Flex alignItems="flex-start" mt={2} pt={2} gap={2}>
            <Checkbox />
            <Text fontSize="x-small">
              By accessing the site, I attest that I am at least 18 years old and agree to
              the{' '}
              <Link href="#" textDecoration="underline">
                Term of Service
              </Link>
              .
            </Text>
          </Flex>
        </Flex>
        <Box position="relative" mt="0.5rem" pt="1rem" pb="0.5rem" width="full">
          <Divider
            orientation="horizontal"
            bgColor={useColorModeValue('gray.300', 'gray.700')}
          />
          <AbsoluteCenter bg={useColorModeValue('white', 'gray.700')} px="4">
            Or
          </AbsoluteCenter>
        </Box>
      </Flex>
      <Box width="382px">
        <Flex direction="column">
          <Stack spacing={2} p="1rem">
            <FormControl>
              <FormLabel htmlFor="email">Email address</FormLabel>
              <InputGroup>
                <Input type="email" id="email" />
              </InputGroup>
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="password">Password</FormLabel>
              <InputGroup>
                <Input type={showPassword ? 'text' : 'password'} id="password" />
                <InputRightElement width="2.5rem">
                  <Box h="2rem" fontSize="sm" onClick={handleShowClick} pt="0.25rem">
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Box>
                </InputRightElement>
              </InputGroup>
              <FormHelperText justifyContent="space-between" display="flex">
                <Flex gap="1">
                  <Checkbox />
                  <Text>Remember me</Text>
                </Flex>
                <Link color="blue.400">Forgot password?</Link>
              </FormHelperText>
            </FormControl>
            <Button
              borderRadius="md"
              type="submit"
              variant="solid"
              colorScheme="blue"
              width="full"
              color="white"
            >
              Register
            </Button>
            <Flex alignItems="flex-start" pt={2} gap={2}>
              <Checkbox />
              <Text fontSize="x-small">
                By accessing the site, I attest that I am at least 18 years old and agree
                to the{' '}
                <Link href="#" textDecoration="underline">
                  Term of Service
                </Link>
                .
              </Text>
            </Flex>
            <Box textAlign="center" pt={8}>
              Already a user?{' '}
              <Link color="blue.500" href="#">
                Login
              </Link>
            </Box>
            <Box textAlign="center" as="a" textDecoration="underline" fontSize={'small'}>
              Enter Referral Code
            </Box>
          </Stack>
        </Flex>
      </Box>
    </Stack>
  )
}

export default Register
