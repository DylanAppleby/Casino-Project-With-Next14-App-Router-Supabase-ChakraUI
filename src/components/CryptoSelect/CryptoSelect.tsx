import { Image, Text, Flex } from '@chakra-ui/react'

interface ICryptoSelect {
  imageURL: string
  label: string
  name: string
}

const CryptoSelect = ({ imageURL, label, name }: ICryptoSelect) => {
  return (
    <Flex
      bg={'rgba(0, 0, 0, 0.2)'}
      direction={'column'}
      justifyContent={'center'}
      alignItems={'center'}
      width={'full'}
      rounded={8}
      py={4}
    >
      <Image src={imageURL} alt={label} width={10} height={10} rounded={'full'} />
      <Text fontSize={'16px'} fontWeight={'bold'} mt={2}>
        {name}
      </Text>
    </Flex>
  )
}
export default CryptoSelect
