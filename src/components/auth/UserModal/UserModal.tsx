'use client'
import {
  Heading,
  VStack,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  Button,
  Text,
  Center,
  useDisclosure,
} from '@chakra-ui/react'
import { FcGoogle } from 'react-icons/fc'

const UserModal = ({}) => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <VStack spacing={4} alignItems={'flex-start'}>
        <Button onClick={onOpen}>open modal</Button>
      </VStack>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalBody py={20}>
            <Heading>Welcome Back</Heading>
            <Text textAlign="center">Sign In to Access Your Account</Text>
            <Button w={'full'} variant={'outline'} leftIcon={<FcGoogle />}>
              <Center>
                <Text>Sign in with Google</Text>
              </Center>
            </Button>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi et mi pretium
              mauris. Etiam velit dolor, consequat in dolor nec, fermentum interdum dolor.
              Morbi placerat rhoncus ex, nec vehicula ante semper sed. Pellentesque
              scelerisque varius facilisis. Fusce suscipit bibendum tortor et ullamcorper.
            </Text>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}

export default UserModal
