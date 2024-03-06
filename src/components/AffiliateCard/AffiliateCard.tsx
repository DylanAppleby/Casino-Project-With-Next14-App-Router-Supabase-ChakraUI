import { Flex, Text } from '@chakra-ui/react'
interface IAffiliateCard {
  label: string
  value: number
  prefixSymbol?: string
  color: 'yellow' | 'default'
}
const AffiliateCard = ({ label, value, prefixSymbol, color }: IAffiliateCard) => {
  return (
    <Flex
      width="full"
      direction={'column'}
      px={6}
      py={4}
      borderRadius={8}
      bg={color === 'yellow' ? '#fabd2d' : '#1b1a1b'}
    >
      <Flex direction={'column'} gap={1}>
        <Text
          fontSize={'20'}
          color={color === 'yellow' ? '#1b1a1b' : '#6a686a'}
          fontWeight={'bold'}
        >
          {label}
        </Text>
        <Text
          fontSize={'28'}
          color={color === 'yellow' ? '#1b1a1b' : '#b9b6b9'}
          fontWeight={'bold'}
        >
          {prefixSymbol ? prefixSymbol + ' ' + value.toString() : value.toString()}
        </Text>
      </Flex>
    </Flex>
  )
}
export default AffiliateCard
