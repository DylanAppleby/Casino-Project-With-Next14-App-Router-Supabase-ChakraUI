import { Box, Flex } from '@chakra-ui/react'
import FunctionCard from '@/components/FunctionCard'
import { FUNCTION_CARDS } from '@/constants/functionCard'
const FunctionCardContainer = () => {
  return (
    <Flex width={{ lg: 'full' }} mx={{ base: -4, md: -6, lg: 0 }}>
      <Flex
        gap={4}
        overflowX={{ base: 'hidden', md: 'auto', lg: 'auto' }}
        px={{ base: 4, md: 6, lg: 0 }}
        css={{
          msOverflowStyle: 'none',
          scrollbarWidth: 'none',
          '&::-webkit-scrollbar': { display: 'none' },
        }} // Hide scrollbar for iOS devices
      >
        {FUNCTION_CARDS.map((functionCard, index) => (
          <FunctionCard
            label={functionCard.label}
            header={functionCard.header}
            content={functionCard.content}
            key={functionCard.label + functionCard.header + functionCard.content + index}
          />
        ))}
      </Flex>
    </Flex>
  )
}

export default FunctionCardContainer
