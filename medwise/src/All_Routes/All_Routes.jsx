import React from "react";
import { Box } from "@chakra-ui/react";
import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import login from "../Pages/login";
import Registration from "../Pages/Registration";
import FindDoctor from "../Pages/FindDoctor"
import AboutUs from "../Pages/AboutUs"
import Services from "../Pages/Services"

function All_Routes() {
  return (
    <Box>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<login />} />
        <Route path="/registration" element={<Registration/>} />
        <Route path="/find_doctor" element={<FindDoctor />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/services" element={<Services/>} />
      </Routes>
    </Box>
  );
}

export default All_Routes;
