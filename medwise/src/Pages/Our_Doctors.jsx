import React, { useEffect, useReducer } from "react";
import axios from "axios";
import {
  Box,
  GridItem,
  Heading,
  Image,
  Grid,
  Text,
  Center,
} from "@chakra-ui/react";
import Loading from "../components/Loading";
import Footer from "../components/Footer";
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

  const fetchData = () => {
    dispatch({ type: "FETCH_LOADING" });
    axios
      .get(`https://medwise-api-oy52.onrender.com/doctors`)
      .then((res) => dispatch({ type: "FETCH_SUCCESS", payload: res.data }))
      .catch((err) => dispatch({ type: "FETCH_ERROR" }));
  };

  useEffect(() => {
    fetchData();
  }, []);

  const { loading, error, data } = state;

  if (loading) {
    return <Loading />;
  }
  return (
    <Box>
     <Heading  as="h1" size="xl"mb="30px" >Our Team of Dedicated Doctors</Heading>
      <Center>
        <Grid
          templateColumns={{
            base: "repeat(1, 1fr)",
            sm: "repeat(2, 1fr)",
            md: "repeat(3, 1fr)",
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
                  width="210px"
                  h={"300px"}
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

      <Footer/>
    </Box>
  );
}

export default FindDoctor;
