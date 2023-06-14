import React from "react";
import MedwiseLogo from "../Images/MedwiseLogo.png";
import loginIcon from "../Images/loginIcon.png"
import { Box, Flex, Image, VStack, HStack, Button } from "@chakra-ui/react";
import { Link as ReachLink, NavLink, Link } from "react-router-dom";
import ButtonComponent from "./ButtonComponent";



const links = [
  { title: "Home", path: "/" },
  { title: "About Us", path: "/aboutus" },
  { title: "Services", path: "/services" },
  { title: "Find a Doctor", path: "/find_Doctor" },
];

const nonActive = {
  textDecoration: "none",
  color: "black",
  fontSize: "18px",
};

const active = {
  color: "dodgerblue",
  fontSize: "18px",
};
function Navbar() {
  return (
    <Box w={"100%"}>
      <Flex align="center" justify="space-evenly">
        <Box w={"190px"}>
          <Image src={MedwiseLogo} alt="medwise" w={"100%"} />
        </Box>

        <Box>
          <HStack spacing="80px">
            {links.map((el) => (
              <NavLink
                to={el.path}
                as={ReachLink}
                style={({ isActive }) => {
                  return isActive ? active : nonActive;
                }}
              >
                {el.title}
              </NavLink>
            ))}
          </HStack>
        </Box>

        <Box>
          <Link to="/login"> 
         <ButtonComponent text="Login" />
          </Link>
         
        </Box>
        <Box>
         <ButtonComponent  text = "Contact Us"/>
        </Box>
      </Flex>
    </Box>
  );
}

export default Navbar;
