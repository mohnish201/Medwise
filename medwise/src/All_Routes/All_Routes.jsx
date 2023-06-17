import React from "react";
import { Box } from "@chakra-ui/react";
import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Login from "../Pages/login";
import Registration from "../Pages/Registration";
import FindDoctor from "../Pages/FindDoctor"
import AboutUs from "../Pages/AboutUs"
import Services from "../Pages/Services"
import ContactUs from "../Pages/ContactUs";

function All_Routes() {
  return (
    <Box>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration/>} />
        <Route path="/find_doctor" element={<FindDoctor />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/services" element={<Services/>} />
        <Route path="/contact" element={<ContactUs/>} />
      </Routes>
    </Box>
  );
}

export default All_Routes;
