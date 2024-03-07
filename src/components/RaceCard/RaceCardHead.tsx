'use client'
import {
  Flex,
  Text,
  Avatar,
  Center,
  Badge,
  Button,
  IconButton,
  useDisclosure,
} from '@chakra-ui/react'
import { StarIcon } from '@chakra-ui/icons'
import { IRaceCardHeadType } from '@/types/raceCard'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'
import countDownTimer from '@/utils/countDownTImer'

const RaceCardHead = ({ avatar, timestamp }: IRaceCardHeadType) => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Flex align={'center'} direction={'column'} marginBottom={{ base: 0, md: 0, lg: 16 }}>
      <Modal size={'xl'} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent paddingY={'24px'} textAlign={'center'}>
          <ModalHeader>Trophy Case</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            You haven't won any trophies yet. Keep opening packs to win!
          </ModalBody>
        </ModalContent>
      </Modal>
      <Text fontSize={{ base: 20, md: 28 }} fontWeight={800}>
        Daily 2.5K Race #140
      </Text>
      <Text fontSize={16} fontWeight={600}>
        ENDS IN
      </Text>
      <Text fontSize={18} fontWeight={700}>
        {countDownTimer(1710000000000)}
      </Text>
      <Center
        width={'40%'}
        height={14}
        bgColor={'rgba(255, 255, 255, 0.04)'}
        borderRadius={8}
        marginY={10}
        position={'relative'}
      >
        <Badge position={'absolute'} fontSize={16} left={-5}>
          166th
        </Badge>
        <Avatar width={24} height={24} src={avatar}></Avatar>
        <IconButton
          position={'absolute'}
          right={-5}
          aria-label="change theme"
          icon={<StarIcon />}
          onClick={onOpen}
        />
      </Center>
      <Text fontWeight={800}>hayden_lu</Text>
      <Text>$11.25 to next level</Text>
    </Flex>
  )
}

export default RaceCardHead
