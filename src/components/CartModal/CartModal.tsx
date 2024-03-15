import {
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  ModalCloseButton,
  ModalHeader,
} from '@chakra-ui/react'

interface ICartModal {
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
}

const CartModal = ({ isOpen, onClose, children }: ICartModal) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent bgColor={'#1F1F1F'} maxW={{ base: '350', md: '500', lg: '672' }}>
        <ModalHeader>Quick Vault</ModalHeader>
        <ModalBody pt={8} pb={6} px={6}>
          {children}
        </ModalBody>
        <ModalCloseButton />
      </ModalContent>
    </Modal>
  )
}

export default CartModal
