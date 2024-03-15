import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  ModalFooter,
  Text,
} from '@chakra-ui/react'

interface ISelectPackModal {
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
}

const SelectPackModal = ({ isOpen, onClose, children }: ISelectPackModal) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent bgColor={'#1F1F1F'} maxWidth={'900px'} maxHeight={'810px'}>
        <ModalHeader fontWeight={'black'}>Select Pack(s)</ModalHeader>
        <ModalBody overflowY={'scroll'}>{children}</ModalBody>
        <ModalCloseButton />
        <ModalFooter justifyContent={'flex-start'}>
          <Text margin={'3px'}>Total Packs: 0</Text>
          <Text margin={'3px'} color={'rgba(255, 255, 255, 0.1)'} fontWeight={'bold'}>
            |
          </Text>
          <Text margin={'3px'}>Total Cost: $0.00</Text>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default SelectPackModal
