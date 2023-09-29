import React from "react";
import {
  Box,
  Center,
  Divider,
  FormLabel,
  Grid,
  GridItem,
  HStack,
  Heading,
  Image,
  Input,
  Text,
  VStack,
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
  Flex,
} from "@chakra-ui/react";
import MedwiseLogo from "../Images/MedwiseLogo.png";
import { MdOutlineCall } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
function Footer() {
  return (
    <Box mt="50px">
      <Center>
        <Image
          src={MedwiseLogo}
          width={{
            base: "300px",
            sm: "300px",
            md: "300px",
            lg: "300px",
            xl: "300px",
          }}
        />
      </Center>

      <Divider />

      <Box>
        <Center>

       
        <Grid
          templateColumns={{
            base: "repeat(1, 1fr)",
            sm: "repeat(2, 1fr)",
            md: "repeat(4, 1fr)",
            lg: "repeat(4, 1fr)",
            xl: "repeat(4, 1fr)",
          }}
          width={"100%"}
          m={"auto"}
         
          
        >
          <GridItem>
            <Heading as="h2" size="md" mb="10px">
              Contact Us
            </Heading>

            <UnorderedList styleType={"none"} spacing={"5px"} >
              <ListItem>About Us</ListItem>
              <ListItem>Annual Checkup</ListItem>
              <ListItem>Blog</ListItem>
              <ListItem>Carrers</ListItem>
            </UnorderedList>
          </GridItem>

          <GridItem>
            <Heading as="h2" size="md" mb="10px">
              About Us
            </Heading>

            <UnorderedList styleType={"none"} spacing={"5px"}  >
              <ListItem>Get a Diagonis</ListItem>
              <ListItem>How it Works</ListItem>
              <ListItem>Privacy Policy</ListItem>
            </UnorderedList>
          </GridItem>

          <GridItem>
            <Heading as="h2" size="md" mb="10px">
              Services
            </Heading>

            <UnorderedList styleType={"none"} spacing={"5px"}  >
              <ListItem>Contact Us</ListItem>
              <ListItem>FAQ'S</ListItem>
              <ListItem>Health Plan</ListItem>
            </UnorderedList>
          </GridItem>

          <GridItem>
            <Heading as="h2" size="md" mb="10px">
              Social
            </Heading>
               
               <Center>

            <HStack spacing={"10px"} >
                <FaFacebook size={"30px"}/>
                <FaTwitter size={"30px"}/>
                <FaInstagram size={"30px"}/>
                <FaLinkedin size={"30px"}/>
            </HStack>
               </Center>
          </GridItem>
        </Grid>
      </Center>
      <Divider/>

      <Flex m="30px" justifyContent={"space-around"}>
        <Text>
            All rights reserved by mohnish201 2023
        </Text>

        <HStack>
            <Text>Privacy Policy</Text>
            <Text>Terms & Conditions</Text>
        </HStack>
      </Flex>
      </Box>
    </Box>
  );
}

export default Footer;
