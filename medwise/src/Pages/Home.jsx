import React from "react";
import ButtonComponent from "../components/ButtonComponent";
import doctor_2edited from "../Images/doctor_2edited.png";
import service from "../Images/service.png";
import { MdImportantDevices } from "react-icons/md";
import { TiTime } from "react-icons/ti";
import { FaRegHandshake } from "react-icons/fa";
import "../Pages/Home.css";
import doctor_3 from "../Images/doctor_3.png";
import doctor_4 from "../Images/doctor_4.png";
import { RiCheckboxCircleFill } from "react-icons/ri";
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
} from "@chakra-ui/react";

function Home() {
  return (
    <Box>
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
        >
          <Heading
            as="h2"
            size={{ base: "xl", sm: "2xl", md: "2xl", lg: "2xl", xl: "3xl" }}
          >
            We help patients live a healthy, longer life.
          </Heading>
          <Text fontSize={"20px"}>
            We value your time so we set up all your accounts billing and costs
            through one payment that we take out of the box
          </Text>

          <ButtonComponent text="Make Appointment" />
        </VStack>

        <Center>
          <Box
            // border={"2px solid black"}
            w={{ sm: "200px", md: "320px", lg: "320px", xl: "320px" }}
            borderRadius={"150px"}
            style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
            boxSizing="borderBox"
          >
            <Image
              src={doctor_2edited}
              alt="doctor-1"
              w={"100%"}
              backgroundColor={"orange"}
              borderRadius={"150px"}
              p={"20px 20px 0px 20px"}
            />
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
        <Center>
          <Box
            borderTopRadius={"150px"}
            w={{ sm: "200px", md: "350px", lg: "350px", xl: "350px" }}
            style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
            boxSizing="borderBox"
          >
            <Image
              src={doctor_3}
              alt="doctor_3"
              backgroundColor={"dodgerblue"}
              borderTopRadius={"150px"}
              w={"100%"}
              p={"20px 20px 0px 20px"}
              boxSizing="borderBox"
            />
          </Box>
        </Center>

        <VStack
          spacing={"60px"}
          w={{ md: "600px", lg: "600px", xl: "600px" }}
          p={"25px"}
          textAlign={"left"}
          alignItems={"left"}
        >
          <Heading
            as="h2"
            size={{ base: "xl", sm: "2xl", md: "3xl", lg: "3xl", xl: "3xl" }}
          >
            Affordable Health Care Solutions
          </Heading>
          <Text fontSize={"20px"}>
            We value your time so we set up all your accounts billing and costs
            through one payment that we take out of the box
          </Text>

          <VStack alignItems={"left"} fontWeight={"bold"}>
            <HStack>
              <RiCheckboxCircleFill color="dodgerblue" size={"30px"} />{" "}
              <span>450+ Happy Pateints</span>
            </HStack>

            <HStack>
              <RiCheckboxCircleFill color="dodgerblue" size={"30px"} />
              <span>450+ Happy Pateints</span>
            </HStack>

            <HStack>
              <RiCheckboxCircleFill color="dodgerblue" size={"30px"} />
              <span>450+ Happy Pateints</span>
            </HStack>
          </VStack>
        </VStack>
      </Box>

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
          spacing={"60px"}
          w={{ md: "600px", lg: "600px", xl: "600px" }}
          p={"25px"}
          textAlign={"left"}
          alignItems={"left"}
        >
          <Heading
            as="h2"
            size={{ base: "xl", sm: "2xl", md: "2xl", lg: "2xl", xl: "3xl" }}
          >
            Trust Your Health with the best Specialists
          </Heading>
          <Text fontSize={"20px"}>
            We value your time so we set up all your accounts billing and costs
            through one payment that we take out of the box
          </Text>

          <ButtonComponent text="Learn More" />
        </VStack>

        <Center>
          <Box
            // border={"2px solid black"}
            w={{ sm: "200px", md: "350px", lg: "350px", xl: "350px" }}
            borderTopRadius={"150px"}
            style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
            boxSizing="borderBox"
          >
            <Image
              src={doctor_4}
              alt="doctor-4"
              w={"100%"}
              backgroundColor={"orange"}
              borderTopRadius={"150px"}
              p={"20px 20px 0px 20px"}
            />
          </Box>
        </Center>
      </Box>

      <Center m={"30px"}>
        <Box>
          <Heading as="h2" size={"2xl"}>
            Our Dedicated Doctors
          </Heading>
          <Grid
            templateColumns={{
              base: "repeat(1, 1fr)",
              sm: "repeat(1, 1fr)",
              md: "repeat(4, 1fr)",
              lg: "repeat(4, 1fr)",
              xl: "repeat(4, 1fr)",
            }}
            gap={6}
            width={"80%"}
            m={"30px"}
          >
            <GridItem>
              <Card
                className="shadow-drop-2-center"
                style={{
                  boxShadow:
                    "rgba(0, 0, 0, 0.07) 0px 1px 1px, rgba(0, 0, 0, 0.07) 0px 2px 2px, rgba(0, 0, 0, 0.07) 0px 4px 4px, rgba(0, 0, 0, 0.07) 0px 8px 8px, rgba(0, 0, 0, 0.07) 0px 16px 16px",
                }}
                borderTopRadius={"30px"}
              >
                <CardBody width={"230px"}>
                  <Image
                    src="https://i.pinimg.com/564x/16/96/71/169671343ef815d20808e6c9e43c5c19.jpg"
                    alt="img-1"
                    width={"100%"}
                    borderTopRadius={"30px"}
                  />
                  Dr. Oliv Thompson
                  <Heading as="h4" size={"md"}>
                    Gynecologist
                  </Heading>
                </CardBody>
              </Card>
            </GridItem>
            <GridItem>
              <Card
                style={{
                  boxShadow:
                    "rgba(0, 0, 0, 0.07) 0px 1px 1px, rgba(0, 0, 0, 0.07) 0px 2px 2px, rgba(0, 0, 0, 0.07) 0px 4px 4px, rgba(0, 0, 0, 0.07) 0px 8px 8px, rgba(0, 0, 0, 0.07) 0px 16px 16px",
                }}
                borderTopRadius={"30px"}
              >
                <CardBody width={"220px"}>
                  <Image
                    src="https://i.pinimg.com/564x/e6/5c/a1/e65ca1dc632163e839f8f1af8cbc3b77.jpg"
                    alt="img-2"
                    borderTopRadius={"30px"}
                  />
                  Dr. Jessica Lee
                  <Heading as="h4" size={"md"}>
                    Dermatologist
                  </Heading>
                </CardBody>
              </Card>
            </GridItem>
            <GridItem>
              <Card
                style={{
                  boxShadow:
                    "rgba(0, 0, 0, 0.07) 0px 1px 1px, rgba(0, 0, 0, 0.07) 0px 2px 2px, rgba(0, 0, 0, 0.07) 0px 4px 4px, rgba(0, 0, 0, 0.07) 0px 8px 8px, rgba(0, 0, 0, 0.07) 0px 16px 16px",
                }}
                borderTopRadius={"30px"}
              >
                <CardBody width={"230px"}>
                  <Image
                    src="https://i.pinimg.com/564x/3b/a1/a5/3ba1a52596efe2de3afe07680ba48755.jpg"
                    alt="img-3"
                    borderTopRadius={"30px"}
                  />
                  Dr. David Wilson
                  <Heading as="h4" size={"md"}>
                    Neurologist
                  </Heading>
                </CardBody>
              </Card>
            </GridItem>
            <GridItem>
              <Card
                style={{
                  boxShadow:
                    "rgba(0, 0, 0, 0.07) 0px 1px 1px, rgba(0, 0, 0, 0.07) 0px 2px 2px, rgba(0, 0, 0, 0.07) 0px 4px 4px, rgba(0, 0, 0, 0.07) 0px 8px 8px, rgba(0, 0, 0, 0.07) 0px 16px 16px",
                }}
                borderTopRadius={"30px"}
              >
                <CardBody width={"240px"}>
                  <Image
                    src="https://i.pinimg.com/564x/80/2f/9a/802f9a21a08aed98c26ddc0e040d1208.jpg"
                    alt="img-4"
                    width={"100%"}
                    borderTopRadius={"30px"}
                  />
                  Dr. Michael Anderson
                  <Heading as="h4" size={"md"}>
                    Cardiologist
                  </Heading>
                </CardBody>
              </Card>
            </GridItem>
          </Grid>
        </Box>
      </Center>

      <Center>
        <Box p={"50px"} mt={"60px"} backgroundColor={"dodgerblue"}>
          <Heading as="h2" size={"2xl"} color={"white"}>
            See Our Latest Blog
          </Heading>
          <Grid
            templateColumns={{
              base: "repeat(1, 1fr)",
              sm: "repeat(2, 1fr)",
              md: "repeat(4, 1fr)",
              lg: "repeat(4, 1fr)",
              xl: "repeat(4, 1fr)",
            }}
            gap={6}
            width={"80%"}
            m={"auto"}
            mt={"80px"}
          >
            <GridItem
              borderTopRadius={"30px"}
              style={{
                boxShadow:
                  "rgba(0, 0, 0, 0.07) 0px 1px 1px, rgba(0, 0, 0, 0.07) 0px 2px 2px, rgba(0, 0, 0, 0.07) 0px 4px 4px, rgba(0, 0, 0, 0.07) 0px 8px 8px, rgba(0, 0, 0, 0.07) 0px 16px 16px",
              }}
              backgroundColor={"orange"}
            >
              <Image
                src="https://i.pinimg.com/564x/64/ba/e0/64bae08a6510f31bb4d8424bab4333f6.jpg"
                alt="blog-1"
                borderTopRadius={"30px"}
              />
              <a href="">Read More</a>
            </GridItem>

            <GridItem
              borderTopRadius={"30px"}
              style={{
                boxShadow:
                  "rgba(0, 0, 0, 0.07) 0px 1px 1px, rgba(0, 0, 0, 0.07) 0px 2px 2px, rgba(0, 0, 0, 0.07) 0px 4px 4px, rgba(0, 0, 0, 0.07) 0px 8px 8px, rgba(0, 0, 0, 0.07) 0px 16px 16px",
              }}
              backgroundColor={"orange"}
            >
              <Image
                src="https://i.pinimg.com/564x/29/c6/f3/29c6f3663a43cb589657523ab195f98d.jpg"
                alt="blog-2"
                borderTopRadius={"30px"}
              />
              <a href="">Read More</a>
            </GridItem>

            <GridItem
              borderTopRadius={"30px"}
              style={{
                boxShadow:
                  "rgba(0, 0, 0, 0.07) 0px 1px 1px, rgba(0, 0, 0, 0.07) 0px 2px 2px, rgba(0, 0, 0, 0.07) 0px 4px 4px, rgba(0, 0, 0, 0.07) 0px 8px 8px, rgba(0, 0, 0, 0.07) 0px 16px 16px",
              }}
              backgroundColor={"orange"}
            >
              <Image
                src="https://i.pinimg.com/564x/9f/49/94/9f499422565255b0af3e11e00f1911cb.jpg"
                alt="blog-3"
                borderTopRadius={"30px"}
              />
              <a href="">Read More</a>
            </GridItem>

            <GridItem
              borderTopRadius={"30px"}
              style={{
                boxShadow:
                  "rgba(0, 0, 0, 0.07) 0px 1px 1px, rgba(0, 0, 0, 0.07) 0px 2px 2px, rgba(0, 0, 0, 0.07) 0px 4px 4px, rgba(0, 0, 0, 0.07) 0px 8px 8px, rgba(0, 0, 0, 0.07) 0px 16px 16px",
              }}
              backgroundColor={"orange"}
            >
              <Image
                src="https://i.pinimg.com/564x/ca/4a/11/ca4a114fb038d1637f050e7ffdc3146b.jpg"
                alt="blog-4"
                borderTopRadius={"30px"}
              />
              <a href="">Read More</a>
            </GridItem>
          </Grid>
        </Box>
      </Center>
    </Box>
  );
}

export default Home;
