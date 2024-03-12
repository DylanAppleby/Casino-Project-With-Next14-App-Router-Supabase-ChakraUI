import { Dispatch, SetStateAction, useState } from 'react'
import { Flex, Box, Button } from '@chakra-ui/react'
import Image from 'next/image'
import { IPack } from '@/types/pack'

interface ISelectedCard {
  imageURL: string
  label: string
  price: number
  packId: string
  selectedPacks: IPack[]
  setTotal: Dispatch<SetStateAction<number>>
  setSelectedPacks: Dispatch<SetStateAction<IPack[]>>
}

const SelectedCard = ({
  imageURL,
  label,
  price,
  packId,
  selectedPacks,
  setTotal,
  setSelectedPacks,
}: ISelectedCard) => {
  const [removeHovered, setRemoveHovered] = useState(false)
  const RemovePack = () => {
    console.log(packId)
    setTotal((prev: number) => prev - price)
    let packs = selectedPacks
    packs = packs.filter((pack) => pack.id !== packId)
    setSelectedPacks(packs)
  }
  return (
    <Flex direction={'column'} gap={2} alignItems={'center'}>
      <Box>
        <Image
          src={imageURL}
          width={72}
          height={132}
          alt={label}
          style={{ width: 'auto', height: 'auto' }}
        />
      </Box>
      <Button
        bg={'transparent'}
        _hover={{ bg: '#2a292a' }}
        width={'full'}
        onMouseEnter={() => setRemoveHovered(true)}
        onMouseLeave={() => setRemoveHovered(false)}
        onClick={RemovePack}
      >
        {removeHovered ? 'Remove' : '$' + price}
      </Button>
    </Flex>
  )
}

export default SelectedCard
