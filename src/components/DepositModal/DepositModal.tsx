import {
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  ModalCloseButton,
  ModalHeader,
} from '@chakra-ui/react'

interface IDepositModal {
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
}

const DepositModal = ({ isOpen, onClose, children }: IDepositModal) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent bgColor={'#1F1F1F'} maxW={{ base: '350', md: '500', lg: '672' }}>
        <ModalHeader>Deposit Funds</ModalHeader>
        <ModalBody pt={8} pb={6} px={6}>
          {children}
        </ModalBody>
        <ModalCloseButton />
      </ModalContent>
    </Modal>
  )
}

export default DepositModal
