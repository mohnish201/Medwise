import React from 'react'
import { Button, Box, Text } from '@chakra-ui/react'
function ButtonComponent({text}) {
  return (
    <Box>
    <Button color={"white"} colorScheme="messenger">
      {text}
    </Button>
  </Box>
  )
}

export default ButtonComponent
