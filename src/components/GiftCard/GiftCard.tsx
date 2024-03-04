import { Box } from '@chakra-ui/react'
import Image from 'next/image'

interface IGiftCard {
  image: string
  label: string
}

const GiftCard = ({ image, label }: IGiftCard) => {
  return (
    <Box>
      <Image
        src={`${process.env.NEXT_PUBLIC_SITE_URL}${image}`}
        alt={label}
        width={247}
        height={318}
        style={{ width: '100%', height: 'auto' }}
      />
    </Box>
  )
}

export default GiftCard
