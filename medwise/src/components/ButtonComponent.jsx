import React from 'react'
import { Button, Box, Text } from '@chakra-ui/react'
function ButtonComponent({text, rightIcon}) {
  return (
    <Box>
    <Button color={"white"} rightIcon={rightIcon} colorScheme="messenger" size={{base: "sm", sm:"sm", md:"md", lg:"lg"}}>
      {text}
    </Button>
  </Box>
  )
}

export default ButtonComponent
