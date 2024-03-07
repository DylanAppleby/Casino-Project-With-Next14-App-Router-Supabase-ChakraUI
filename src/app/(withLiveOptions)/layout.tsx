import { ReactNode } from 'react'

import { Box, Flex } from '@chakra-ui/react'

import GiftVouncherContainer from '@/containers/GiftVouncherContainer'

interface IWithLiveOptionsLayout {
  children: ReactNode
}

const WithLiveOptionsLayout = (props: IWithLiveOptionsLayout) => {
  const { children } = props

  return (
    <Flex gap={4} width="full">
      {children}
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        rounded="0.325rem"
        maxWidth={80}
        width="full"
      >
        <GiftVouncherContainer />
      </Box>
    </Flex>
  )
}

export default WithLiveOptionsLayout
