import { Modal, ModalBody, ModalContent, ModalOverlay } from '@chakra-ui/react'

interface IUserModal {
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
}

const UserModal = ({ isOpen, onClose, children }: IUserModal) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent bgColor={'#1F1F1F'}>
        <ModalBody pt={8} pb={6} px={6}>
          {children}
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}

export default UserModal
