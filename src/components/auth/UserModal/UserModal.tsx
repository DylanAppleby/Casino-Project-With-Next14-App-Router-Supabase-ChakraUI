'use client'
import {
  VStack,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  Button,
  useDisclosure,
} from '@chakra-ui/react'

import Login from '../Login'
import Register from '../Register'

interface IUserModal {
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
}

const UserModal = ({ isOpen, onClose, children }: IUserModal) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalBody pt={8} pb={6} px={6}>
          {children}
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}

export default UserModal
