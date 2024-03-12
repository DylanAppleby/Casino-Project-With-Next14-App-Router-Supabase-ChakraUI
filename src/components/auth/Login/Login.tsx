'use client'
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
  Badge,
  FormHelperText,
  Link,
  Text,
  Checkbox,
  Flex,
  Divider,
  FormLabel,
  AbsoluteCenter,
  useColorModeValue,
  useToast 
} from '@chakra-ui/react'
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import { FcGoogle } from 'react-icons/fc'
import { useSupabase } from '@/contexts/supabase-provider'
import { useRouter } from 'next/navigation'
import emailValidation from '@/utils/emailValidation'

const Login = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailErr, setEmailErr] = useState('')
  const [errMsg, setErrMsg] = useState('')

  const handleShowClick = () => setShowPassword(!showPassword)
  const supabase = useSupabase()
  const router = useRouter()
  const toast = useToast()

  const handleSignIn = async () => {
    if(emailValidation(email)) {
      const { error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
      })
      if (error) {
        setErrMsg('The email or password combination was incorrect. Please try again.')
        setEmailErr('')
      }
      else {
        router.refresh()
        toast({
          title: 'Login Success!.',
          description: "We've logged your account succesfully.",
          status: 'success',
          duration: 5000,
          isClosable: true,
        })
      }
    }else {
      setEmailErr('Email must have @ and . element')
    }
  }

  return (
    <Stack flexDir="column" justifyContent="center" alignItems="center" gap={0}>
      <Flex direction="column" mb={2} py={6} px={4}>
        <Heading textAlign="center" fontSize="x-large">
          Welcome Back
        </Heading>
        <Text textAlign="center" color="gray.500">
          Sign In to Access Your Account
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
        <Flex position="relative" direction="column" mt="1rem" py="0.5rem" width="full">
          <Divider
            orientation="horizontal"
            bgColor={useColorModeValue('gray.300', 'gray.700')}
          />
          <AbsoluteCenter
            bg={useColorModeValue('white', 'gray.700')}
            px="4"
            bgColor={'#1F1F1F'}
          >
            Or
          </AbsoluteCenter>
        </Flex>
      </Flex>
      <Box width="382px">
        <Flex direction="column">
          <Stack spacing={2} p="1rem">
            <FormControl>
              <FormLabel htmlFor="email">Email address</FormLabel>
              <InputGroup>
                <Input
                  onChange={(e: any) => setEmail(e.target.value)}
                  type="email"
                  id="email"
                />
              </InputGroup>
            </FormControl>
            <Badge colorScheme="red">{emailErr}</Badge>
            <FormControl>
              <FormLabel htmlFor="password">Password</FormLabel>
              <InputGroup>
                <Input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  onChange={(e: any) => setPassword(e.target.value)}
                />
                <InputRightElement width="2.5rem">
                  <Box h="2rem" fontSize="sm" onClick={handleShowClick} pt="0.25rem">
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Box>
                </InputRightElement>
              </InputGroup>
              {0 < password.length && password.length < 8 && (
                <Text fontSize={'14'}>Password must have 8+ characters.</Text>
              )}
              <FormHelperText justifyContent="space-between" display="flex">
                <Flex gap="1">
                  <Checkbox />
                  <Text>Remember me</Text>
                </Flex>
                <Link color="blue.400">Forgot password?</Link>
              </FormHelperText>
              {errMsg && (
                <Stack
                  width={'100%'}
                  bgColor={'#E53E3E'}
                  color={'white'}
                  padding={2}
                  borderRadius={8}
                  marginY={4}
                >
                  <Text align={'center'}>{errMsg}</Text>
                </Stack>
              )}
            </FormControl>
            <Button
              borderRadius="md"
              type="submit"
              variant="solid"
              colorScheme="blue"
              width="full"
              color="white"
              onClick={handleSignIn}
              isDisabled={email && password.length > 7 ? false : true}
            >
              Login
            </Button>
            <Box textAlign="center" pt={8}>
              Don't have an account?{' '}
              <Link color="blue.500" href="#">
                Register
              </Link>
            </Box>
          </Stack>
        </Flex>
      </Box>
    </Stack>
  )
}

export default Login
