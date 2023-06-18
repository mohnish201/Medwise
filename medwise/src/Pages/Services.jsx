import React, { useContext } from "react";
import ButtonComponent from "../components/ButtonComponent";
import doctor_2edited from "../Images/doctor_2edited.png";
// import service from "../Images/service.png";
import { MdImportantDevices } from "react-icons/md";
import { TiTime } from "react-icons/ti";
import { FaRegHandshake } from "react-icons/fa";
import "../Pages/Home.css";
import doctor_3 from "../Images/doctor_3.png";
import doctor_4 from "../Images/doctor_4.png";
import { RiCheckboxCircleFill } from "react-icons/ri";
import { AuthContext } from "../AuthContextProvider/AuthContextProvider";
import {
  Grid,
  GridItem,
  Box,
  Heading,
  Text,
  VStack,
  Image,
  Spacer,
  Center,
  HStack,
  Checkbox,
  Card,
  CardBody,
  useToast,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import service from "../Images/service.jpg";
import Footer from "../components/Footer";
function Services() {
  return (
    <Box>
      <Image src={service} alt="bg" />

      <Box
        w="80%"
        display={{ base: null, sm: null, md: "flex", lg: "flex", xl: "flex" }}
        m={"auto"}
        mt={"20px"}
        justifyContent={{
          sm: "space-around",
          md: "space-around",
          lg: "space-around",
          xl: "space-around",
        }}
        p={{ sm: null, md: "20px", lg: "20px", xl: "20px" }}
      >
        <VStack
          w={{ md: "600px", lg: "600px", xl: "600px" }}
          p={"25px"}
          textAlign={"left"}
          alignItems={"left"}
          spacing={"60px"}
        >
          <Heading
            as="h2"
            size={{ base: "xl", sm: "2xl", md: "2xl", lg: "2xl", xl: "3xl" }}
          >
           Our Services That We Provide
          </Heading>
        </VStack>

        <Center>
          <Box
            // border={"2px solid black"}
            w={{ sm: "200px", md: "320px", lg: "320px", xl: "320px" }}
            boxSizing="borderBox" textAlign={"left"}
          >
            <Text>
              To facilitate medical services through health care facilities,
              especially for people who are difficult to reach or have
              difficulty accessing health care facilities
            </Text>
          </Box>
        </Center>
      </Box>
      <Center mt={"30px"}>
        <Grid
          templateColumns={{
            base: "repeat(1, 1fr)",
            sm: "repeat(1, 1fr)",
            md: "repeat(3, 1fr)",
            lg: "repeat(3, 1fr)",
            xl: "repeat(3, 1fr)",
          }}
          gap={6}
          width={"80%"}
        >
          <GridItem
            style={{
              boxShadow:
                "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
            }}
            p={"30px"}
            backgroundColor={"#c4eef6"}
            borderRadius={"20px"}
          >
            <Center>
              <HStack>
                <MdImportantDevices size={"80px"} />
                <Heading as="h3" size={"md"}>
                  Specialised Service
                </Heading>
              </HStack>
            </Center>
            <Text textAlign={"left"}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Exercitationem pariatur nam perspiciatis, illo at consequatur.
            </Text>
          </GridItem>

          <GridItem
            style={{
              boxShadow:
                "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
            }}
            p={"30px"}
            backgroundColor={"#c4eef6"}
            borderRadius={"20px"}
          >
            <Center>
              <HStack>
                <TiTime size={"80px"} />
                <Heading as="h3" size={"md"}>
                  24/7 Proper Care
                </Heading>
              </HStack>
            </Center>
            <Text textAlign={"left"}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Exercitationem pariatur nam perspiciatis, illo at consequatur.
            </Text>
          </GridItem>

          <GridItem
            style={{
              boxShadow:
                "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
            }}
            p={"30px"}
            backgroundColor={"#c4eef6"}
            borderRadius={"20px"}
          >
            <Center>
              <HStack>
                <FaRegHandshake size={"80px"} />
                <Heading as="h3" size={"md"}>
                  Get Result Online
                </Heading>
              </HStack>
            </Center>
            <Text textAlign={"left"}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Exercitationem pariatur nam perspiciatis, illo at consequatur.
            </Text>
          </GridItem>
        </Grid>
      </Center>
      <Footer/>
    </Box>
  );
}

export default Services;
