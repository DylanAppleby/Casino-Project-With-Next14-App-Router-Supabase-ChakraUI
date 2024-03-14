import {
  Modal,
  ModalBody,
  ModalContent,
  ModalCloseButton,
  ModalOverlay,
} from '@chakra-ui/react'

interface IGiftCardDetailModal {
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
}

const GiftCardDetailModal = ({ isOpen, children, onClose }: IGiftCardDetailModal) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent
        bgColor={'#1F1F1F'}
        maxW={{ base: '350px', md: '700px', lg: '900px' }}
      >
        <ModalCloseButton />
        <ModalBody pt={8} pb={6} px={6}>
          {children}
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}

export default GiftCardDetailModal
