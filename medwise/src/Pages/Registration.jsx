import React, { useContext } from "react";
import { useState, useReducer } from "react";
import {
  Button,
  Center,
  Checkbox,
  Heading,
  Image,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import MedwiseLogo from "../Images/MedwiseLogo.png";
import { Link, Navigate } from "react-router-dom";
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  FormHelperText,
  useToast,
  Text,
  Stack,
  Radio,
  RadioGroup,
} from "@chakra-ui/react";
import { AuthContext } from "../AuthContextProvider/AuthContextProvider";
import Footer from "../components/Footer";

const initState = {
  name: "",
  Email: "",
  age: "",
  gender: "",
  date_of_birth: "",
};

const reducer = (state, { type, payload }) => {
  switch (type) {
    case "name":
      return { ...state, name: payload };

    case "Email":
      return { ...state, Email: payload };

    case "age":
      return { ...state, age: payload };

    case "gender":
      return { ...state, gender: payload };

    case "date_of_birth":
      return { ...state, date_of_birth: payload };

    default:
      return state;
  }
};

function Registration() {
  const { auth, login, logout } = useContext(AuthContext);
  const [state, dispatch] = useReducer(reducer, initState);
  const [submittedData, setSubmittedData] = useState([]);

  const toast = useToast();

  const handleChange = (e) => {
    const { name, value, type } = e.target;

    console.log(value);
    dispatch({ type: name, payload: value });
  };

  const { name, Email, age, gender, date_of_birth } = state;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name ==="" || Email === "" || age===""|| gender===""|| date_of_birth==="") {
      toast({
        title: "Fill All Details",
        status: "warning",
        duration: 9000,
        isClosable: true,
      });
    } else {
    toast({
      title: "Account Created",
      status: "success",
      duration: 9000,
      isClosable: true,
    });
    setSubmittedData([...submittedData, state]);
    console.log(state);

  
    }
  };

  return (
    <Box>
      <Center>
        <Image src={MedwiseLogo} alt="logo" w={"250px"} />
      </Center>

      <Center>
        <Box
          w={{ base: "400px", sm: "400px", md: "400px", lg: "500px" }}
          alignContent={"center"}
          borderRadius={"20px"}
          p={"20px 90px 20px 90px"}
          style={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" }}
          border={"1px solid #DDE6ED"}
        >
          <Heading mb={"20px"} size={"md"}>
            Create Your Account
          </Heading>
          <form onSubmit={handleSubmit}>
            <FormControl textAlign={"left"}>
              <FormLabel>Your full Name</FormLabel>
              <Input
                type="text"
                value={name}
                name="name"
                placeholder="Enter Your Name"
                onChange={handleChange}
                mb={"10px"}
              />

              <FormLabel>Your Email</FormLabel>
              <Input
                type="email"
                value={Email}
                name="Email"
                placeholder="name@gmail.com"
                onChange={handleChange}
                mb={"10px"}
              />

              <FormLabel>Your Age</FormLabel>
              <Input
                type="text"
                value={age}
                placeholder="Your Age"
                onChange={handleChange}
                name="age"
                mb={"10px"}
              />

              <FormLabel>Your Gender</FormLabel>
              <RadioGroup
                mb={"10px"}
                name="gender"
                value={gender}
                onChange={(value) => handleChange({ target: { name: 'gender', value } })}
              >
                <Stack spacing={5} direction="row">
                  <Radio colorScheme="red" value="male">
                    Male
                  </Radio>
                  <Radio colorScheme="green" value="female">
                    Female
                  </Radio>
                </Stack>
              </RadioGroup>

              <FormLabel>Date of Birth</FormLabel>
              <Input
                type="date"
                value={date_of_birth}
                onChange={handleChange}
                mb={"10px"}
                name="date_of_birth"
              />

              <Center>
                <Button mt={4} colorScheme="messenger" type="submit" w={"100%"}>
                  Register
                </Button>
              </Center>
            </FormControl>
          </form>
          <Text mt={"20px"}>
            Already have an account?{" "}
            <Link to="/login" style={{ color: "red" }}>
              Sign in
            </Link>
          </Text>
        </Box>
      </Center>
      <Footer/>
    </Box>
  );
}

export default Registration;
