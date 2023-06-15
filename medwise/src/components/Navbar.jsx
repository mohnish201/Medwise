import React from "react";
import MedwiseLogo from "../Images/MedwiseLogo.png";
import loginIcon from "../Images/loginIcon.png";
import {
  Box,
  Flex,
  Image,
  VStack,
  HStack,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  IconButton,
  Spacer,
} from "@chakra-ui/react";
import { Link as ReachLink, NavLink, Link } from "react-router-dom";
import ButtonComponent from "./ButtonComponent";
import { AiFillHome,AiFillInfoCircle } from "react-icons/ai";
import { GrServices } from "react-icons/gr";
import { GiDoctorFace } from "react-icons/gi";
import { HamburgerIcon } from "@chakra-ui/icons";

const links = [
  { title: "Home", path: "/" },
  { title: "About Us", path: "/aboutus" },
  { title: "Services", path: "/services" },
  { title: "Find a Doctor", path: "/find_Doctor" },
];

const nonActive = {
  textDecoration: "none",
  color: "black",
};

const active = {
  color: "dodgerblue",
};

const breakpoints = {
  sm: "320px",
  md: "768px",
  lg: "960px",
  xl: "1200px",
  "2xl": "1536px",
};
function Navbar() {
  return (
    <Flex
      align="center"
      justify="space-evenly"
      border={"2px solid black"}
      w={"100%"}
    >
      <Box
        border={"2px solid black"}
        w={{
          base: "120px",
          sm: "120px",
          md: "150px",
          lg: "190px",
          xl: "190px",
          "2xl": "190px",
        }}
      >
        <Image src={MedwiseLogo} alt="medwise" w={"100%"} />
      </Box>

      <HStack
        border={"2px solid black"}
        w={"40%"}
        fontSize={{ base: "5px", sm: "10px", md: "15px", lg: "18px" }}
        display={{
          base: "none",
          sm: "none",
          md: "flex",
          lg: "flex",
          xl: "flex",
        }}
        justifyContent={"space-around"}
      >
        {links.map((el) => (
          <NavLink
            key={el.id}
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

      <Link to="/login">
        <ButtonComponent text="Login" />
      </Link>

      <Link to="/contact">
        <ButtonComponent text="Contact Us" />
      </Link>

      <Menu>
        <MenuButton
          as={IconButton}
          aria-label="Options"
          icon={<HamburgerIcon />}
          variant="outline"
          display={{base:"block", sm:"block", md: "none", lg: "none", xl:"none"}}
        />

        <MenuList>
          <Link to="/">
          <MenuItem>
            Home <Spacer /> <AiFillHome />{" "}
          </MenuItem>
          </Link>
          
          <Link to="/aboutus">
          <MenuItem>About Us <Spacer/> <AiFillInfoCircle/></MenuItem>
          </Link>
        
        <Link to="/services">
        <MenuItem>Services <Spacer/> <GrServices/></MenuItem>
        </Link>
         
         <Link to="/find_doctor">
         <MenuItem>Find a Doctor  <Spacer/>  <GiDoctorFace/> </MenuItem>
         </Link>
          
        </MenuList>
      </Menu>
    </Flex>
  );
}

export default Navbar;
