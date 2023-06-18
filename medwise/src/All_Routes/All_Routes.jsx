import React from "react";
import { Box } from "@chakra-ui/react";
import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Login from "../Pages/login";
import Registration from "../Pages/Registration";
import Our_Doctors from "../Pages/Our_Doctors";
import AboutUs from "../Pages/AboutUs";
import Services from "../Pages/Services";
import ContactUs from "../Pages/ContactUs";
import Appointment from "../Pages/Appointment";
import PrivateRoute from "../components/PrivateRoute";

function All_Routes() {
  return (
    <Box>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route
          path="/Our_Doctors"
          element={
            <PrivateRoute>
              <Our_Doctors />
            </PrivateRoute>
          }
        />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route
          path="/appointment"
          element={
            <PrivateRoute>
              <Appointment />
            </PrivateRoute>
          }
        />
      </Routes>
    </Box>
  );
}

export default All_Routes;
