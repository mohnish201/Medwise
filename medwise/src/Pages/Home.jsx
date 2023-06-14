import { Box, Heading, VStack, Text, Flex, Image, Center} from "@chakra-ui/react";
import React from "react";
import ButtonComponent from "../components/ButtonComponent";
import doctor_1edited from "../Images/doctor_1edited.png"

function Home() {
  return (
    <Center>

  
    <Box m={"auto"} mt={"50px"} >
      <Flex justifyContent="space-between">
        <Box>
          <VStack w={"500px"} textAlign={"left"} spacing='60px' align={"left"}>
            <Heading as="h1"  size={"3xl"} lineHeight={"80px"}>
              We help pateints live a healthy, longer life .
            </Heading>
             
            <Text fontSize={"20px"}>
              We value your time so we set up all your accounts billing and
              costs through one payment that we take out of the box.
            </Text>

            <ButtonComponent text="Make Appointment" />
          </VStack>
        </Box>

        <Box w={"30%"}>
          <Image
            src="https://i.pinimg.com/564x/e5/3e/87/e53e8760a712ca7f9753944e270cc2df.jpg"  backgroundColor={"orange"} borderRadius={"100px"}
            alt="doctor-1"
          />
        </Box>
      </Flex>
    </Box>
    </Center>
  );
}

export default Home;
