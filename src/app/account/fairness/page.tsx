import { Flex, Input, Text, Button } from '@chakra-ui/react'

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
  return (
    <Flex width={'full'} gap={7} direction={'column'}>
      <Flex
        width={'full'}
        height={'50px'}
        borderBottom={'1px'}
        fontSize={'20px'}
        fontWeight={'black'}
      >
        Fireness
      </Flex>
      <Flex direction={'column'} gap={1}>
        <Text fontWeight={'bold'}>Change your client seed</Text>
        <Text fontSize={'15px'}>
          This is a random string that is used (in combination with the server seed, and a
          nonce) to generate a random number. You can change your client seed at any time.
        </Text>
      </Flex>
      <Flex direction={'column'} gap={3}>
        <Text fontWeight={'bold'}>Client seed</Text>
        <Input
          width={{ base: 'full', md: '550px' }}
          value={'b1a7eff7-8332-4596-9730-62ecc63ffc03'}
        />
        <Button width={'180px'} bgColor="#d3a03e">
          Save Client Seed
        </Button>
      </Flex>
      <Flex direction={'column'} gap={1}>
        <Text fontWeight={'bold'}>Server seed hash</Text>
        <Text fontSize={'15px'}>
          This is the hashed representation of the random string that is used (in
          combination with the client seed, and a nonce) to generate a random number. The
          unhashed server seed will be revealed after each purchase in your purchase
          history. You can use the unhashed server seed to verify the fairness of the
          random number generator. The server seed is updated after each purchase.
        </Text>
        <Input
          width={{ base: 'full', md: '550px' }}
          value={
            'f2bebbe8ec3493bbda7e0d600fb155a953034de53d0f460ca8ac4267782f4a85773052cadd084a00fe4a7fc104e602a4dca94c46b38677e0161686a3b4143e93'
          }
        />
      </Flex>
      <Flex direction={'column'} gap={3}>
        <Text fontWeight={'bold'}>Verify randomness</Text>
        <Text fontSize={'15px'}>
          The functions shown below are used to generate randomness. You can use them to
          verify the fairness of the random number generator. The server seed, client
          seed, and nonce used for a Pack opening can be found in your purchase history.
          To verify the fairness of a Pack opening, pass the clientSeed, serverSeed, and
          nonce to the combineSeeds function. The result of this function is the hash that
          was used to generate the random number. To generate the random number, pass the
          hash to the convertHashToNumber function. The result of this function is the
          random number that was generated. You can compare this number to the number that
          was generated for your Pack opening.
        </Text>
        <Flex
          width={'full'}
          height={{ base: 'full', md: '260px' }}
          bgColor={'#222'}
          fontSize={'13px'}
          padding={'5px'}
        >
          <Text style={{ whiteSpace: 'pre-wrap' }}>{codeString}</Text>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default Fairness
