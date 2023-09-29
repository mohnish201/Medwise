import React, { useEffect, useReducer, useState } from "react";
import axios from "axios";
import {
  Box,
  GridItem,
  Heading,
  Image,
  Grid,
  Text,
  Center,
  Select,
  Button,
} from "@chakra-ui/react";
import Loading from "../components/Loading";
import Footer from "../components/Footer";
import ButtonComponent from "../components/ButtonComponent";
const initState = {
  loading: false,
  data: [],
  error: false,
};

const reducer = (state, { type, payload }) => {
  switch (type) {
    case "FETCH_LOADING":
      return { ...state, loading: true, data: [], error: false };

    case "FETCH_SUCCESS":
      return { ...state, loading: false, data: payload, error: false };

    case "FETCH_ERROR":
      return { ...state, loading: false, data: [], error: true };
    default:
      return state;
  }
};
function FindDoctor() {
  const [state, dispatch] = useReducer(reducer, initState);
  const [designation, setDesignation] = useState("");

  const fetchData = () => {
    dispatch({ type: "FETCH_LOADING" });
    const params = {};
    if (designation) {
      params.designation = designation;
    }
    axios
      .get("https://medwise.onrender.com/doctors", { params })
      .then((res) => dispatch({ type: "FETCH_SUCCESS", payload: res.data }))
      .catch(() => dispatch({ type: "FETCH_ERROR" }));
  };

  useEffect(() => {
    fetchData();
  }, [designation]);

  const { loading, error, data } = state;
  console.log(designation);
  if (loading) {
    return <Loading />;
  }
  return (
    <Box>
      <Heading as="h1" size="xl" mb="30px">
        Our Team of Dedicated Doctors
      </Heading>
      <Center>
        <Select
          size={"md"}
          w={"240px"}
          mb="20px"
          value={designation}
          onChange={(e) => setDesignation(e.target.value)}
        >
          <option value="">--Select Speciality--</option>
          <option value="Dermatologist">Dermatologist</option>
          <option value="Orthopedic Surgeon">Orthopedic Surgeon</option>
          <option value="Pediatrician">Pediatrician</option>
          <option value="Neurologist">Neurologist</option>
          <option value="Gynecologist">Gynecologist</option>
          <option value="ENT Specialist">ENT Specialist</option>
          <option value="Ophthalmologist">Ophthalmologist</option>
          <option value="Endocrinologist">Endocrinologist</option>
          <option value="General Surgeon">General Surgeon</option>
          <option value="Psychiatrist">Psychiatrist</option>
          <option value="Gastroenterologist">Gastroenterologist</option>
          <option value="Rheumatologist">Rheumatologist</option>
          <option value="Dentist">Dentist</option>
          <option value="Pulmonologist">Pulmonologist</option>
        </Select>
      </Center>
      <Center>
        <Grid
          templateColumns={{
            base: "repeat(1, 1fr)",
            sm: "repeat(1, 1fr)",
            md: "repeat(2, 1fr)",
            lg: "repeat(4, 1fr)",
            xl: "repeat(4, 1fr)",
          }}
          gap={"20px"}
          w={"80%"}
        >
          {data.map((el) => (
            <Center>
              <GridItem
                key={el.name}
                style={{
                  boxShadow:
                    "rgba(0, 0, 0, 0.07) 0px 1px 1px, rgba(0, 0, 0, 0.07) 0px 2px 2px, rgba(0, 0, 0, 0.07) 0px 4px 4px, rgba(0, 0, 0, 0.07) 0px 8px 8px, rgba(0, 0, 0, 0.07) 0px 16px 16px",
                }}
                borderRadius={"30px"}
                p={"20px"}
              >
                <Image
                  src={el.image}
                  alt={el.name}
                  width={{
                    base: "100px",
                    sm: "210px",
                    md: "210px",
                    lg: "210px",
                    lg: "210px",
                  }}
                  h={{
                    base: "160px",
                    sm: "300px",
                    md: "280px",
                    lg: "230px",
                    xl: "300px",
                  }}
                  borderRadius={"30px"}
                />

                <Box mt={"10px"}>
                  <Heading as="h4" size="sm">
                    {el.name}
                  </Heading>
                  <Text>{el.designation}</Text>
                </Box>
              </GridItem>
            </Center>
          ))}
        </Grid>
      </Center>

      <Footer />
    </Box>
  );
}

export default FindDoctor;
