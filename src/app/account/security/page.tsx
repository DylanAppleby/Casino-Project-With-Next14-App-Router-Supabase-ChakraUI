'use client'
import React, { useState, ChangeEvent } from 'react'
import {
  Flex,
  Input,
  Text,
  Button,
  InputRightElement,
  InputGroup,
  Grid,
  GridItem,
} from '@chakra-ui/react'
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'

const codeString = `
    import crypto from 'crypto'

    export const sha512 = (value: string) => crypto.createHash('sha512').update(value).digest('hex')

    export const combineSeeds = (clientSeed: string, serverSeed: string, nonce: number) => sha512(\`"\${clientSeed}:\${serverSeed}:\${nonce}"\`)

    export const convertHashToNumber = (hash: string, max: number) => {
      const hashInt = BigInt('0x' + hash)
      const maxInt = BigInt(max)
      return Number((hashInt % maxInt) + BigInt(1))
    }
  `

const Fairness = () => {
  const [password, setPassword] = useState<string>('')
  const [showPassword, setShowPassword] = useState<boolean>(false)

  const [confirmpassword, setConfirmPassword] = useState<string>('')
  const [showConfirmPassword, setConfirmShowPassword] = useState<boolean>(false)

  const [isGreen, setIsGreen] = useState<boolean>(false)

  const handleTogglePassword = () => {
    setShowPassword(!showPassword)
  }

  const handleConfirmPassword = () => {
    setConfirmShowPassword(!showConfirmPassword)
  }

  const handleChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value
    setPassword(newValue)

    // Regex to test for English letters
    const containsEnglishLetter = /[a-zA-Z]/.test(newValue)
    setIsGreen(containsEnglishLetter)
  }

  return (
    <Flex width={'full'} gap={7} direction={'column'}>
      <Flex
        width={'full'}
        height={'50px'}
        borderBottom={'1px'}
        fontSize={'20px'}
        fontWeight={'black'}
      >
        Security
      </Flex>
      <Flex direction={'column'} gap={1}>
        <Text fontWeight={'bold'}>Change your email address</Text>
        <Text fontSize={'15px'}>
          This private email address will be used for account-related notications,
          password reset requests, and sign in identity. Note: If you change your address,
          you will need to use your new address the next time you sign in. If you
          originally signed in with google, you will no longer be able to access this
          account by signing in with Google.
        </Text>
      </Flex>
      <Flex direction={'column'} gap={3}>
        <Text fontWeight={'bold'}>Email address</Text>
        <Input width={{ base: 'full', md: '350px' }} value={'assaultsig@gmail.com'} />
        <Button width={'200px'} bgColor="#d3a03e">
          Update Email Address
        </Button>
      </Flex>
      <Flex direction={'column'} gap={1}>
        <Text fontWeight={'bold'}>Change your password</Text>
        <Text fontSize={'15px'}>
          We recommend using a strong password that you do not use anywhere else. Your
          password must receive a strength score of at least 3 out of 5. To increase the
          strength score of your password, include special characters, lowercase and
          capital letters, numbers, and a minimum length of 8 characters.
        </Text>
      </Flex>
      <Flex direction={'column'} gap={3}>
        <Text fontWeight={'bold'}>New password</Text>
        <InputGroup width={{ base: 'full', md: '350px' }}>
          <Input
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={handleChangePassword}
            width={{ base: 'full', md: '350px' }}
          />
          <InputRightElement width="fit-content">
            <Button
              onClick={handleTogglePassword}
              bgColor={'#181718'}
              width={'5px'}
              height={'38px'}
              marginX={'1px'}
              style={{ backgroundColor: 'transparent' }}
            >
              {showPassword ? <ViewOffIcon /> : <ViewIcon />}
            </Button>
          </InputRightElement>
        </InputGroup>
        <Grid
          templateColumns="repeat(5, 1fr)"
          gap={2}
          width={{ base: 'full', md: '350px' }}
        >
          <GridItem
            w="100%"
            h="2"
            bg={isGreen ? 'green' : 'blue.500'}
            bgColor={'white'}
          />
          <GridItem w="100%" h="2" bg="blue.500" bgColor={'white'} />
          <GridItem w="100%" h="2" bg="blue.500" bgColor={'white'} />
          <GridItem w="100%" h="2" bg="blue.500" bgColor={'white'} />
          <GridItem w="100%" h="2" bg="blue.500" bgColor={'white'} />
        </Grid>
      </Flex>
      <Flex direction={'column'} gap={3}>
        <Text fontWeight={'bold'}>Confirm new password</Text>
        <InputGroup width={{ base: 'full', md: '350px' }}>
          <Input
            type={showConfirmPassword ? 'text' : 'password'}
            value={confirmpassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            width={{ base: 'full', md: '350px' }}
          />
          <InputRightElement width="fit-content">
            <Button
              onClick={handleConfirmPassword}
              bgColor={'#181718'}
              width={'5px'}
              height={'38px'}
              marginX={'1px'}
              style={{ backgroundColor: 'transparent' }}
            >
              {showConfirmPassword ? <ViewOffIcon /> : <ViewIcon />}
            </Button>
          </InputRightElement>
        </InputGroup>
        <Button width={'170px'} bgColor="#d3a03e">
          Update Password
        </Button>
      </Flex>
    </Flex>
  )
}

export default Fairness
