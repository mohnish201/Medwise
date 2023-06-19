import React, { useContext } from "react";
import { useState } from "react";
import {
  Button,
  Center,
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
} from "@chakra-ui/react";
import { AuthContext } from "../AuthContextProvider/AuthContextProvider";
import Footer from "../components/Footer";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const { auth, login, logout } = useContext(AuthContext);

  const handleClick = () => setShow(!show);
  const toast = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email === "mohnish201@gmail.com" && password === "1234") {
      login("Mohnish Vishwakarma");
      toast({
        title: "Login Successful",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
    } else {
      toast({
        title: "Incorrect Details",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }
  };

  if (auth.isAuth) {
    return <Navigate to={"/"} />;
  }


  return (
    <Box mt={"40px"}>
      <Center>
        <Image src={MedwiseLogo} alt="logo" w={"250px"} />
      </Center>

      <Center>
        <Box
          w={{ base: "400px", sm: "400px", md: "400px", lg: "500px" }}
          alignContent={"center"}
          mt={"20px"}
          borderRadius={"20px"}
          p={"50px 90px 50px 90px"}
          style={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" }}
          border={"1px solid #DDE6ED"}
        >
          <Heading mb={"50px"}>Sign in</Heading>
          <form onSubmit={handleSubmit}>
            <FormControl textAlign={"left"}>
              <FormLabel>Your Email</FormLabel>
              <Input
                type="email"
                value={email}
                placeholder="name@gmail.com"
                onChange={(e) => setEmail(e.target.value)}
                mb={"10px"}
                autoComplete
              />

              <FormLabel>Your Password</FormLabel>
              <InputGroup>
                <Input
                  type={show ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <InputRightElement width="4.5rem">
                  <Button h="1.75rem" size="sm" onClick={handleClick}>
                    {show ? "Hide" : "Show"}
                  </Button>
                </InputRightElement>
              </InputGroup>

              <Center>
                <Button
                  mt={4}
                  colorScheme="messenger"
                  type="submit"
                  w={"100%"}
                >
                  Submit
                </Button>
              </Center>
            </FormControl>
          </form>
          <Text mt={"20px"}>
            Don't have an account?{" "}
            <Link to="/registration" style={{ color: "red" }}>
              Register Yourself
            </Link>
          </Text>
        </Box>
      </Center>

    </Box>
  );
}

export default Login;
