import {
  Heading,
  Box,
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  Textarea,
  Select,
  Center,
  Button,
  Flex,
  VStack,
  Badge,
  Text,
  Spacer,
  HStack,
  Toast,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useReducer, useRef } from "react";
import Footer from "../components/Footer";

const initState = {
  patientName: "",
  date: "",
  time: "",
  status: "",
};

const reducer = (state, { type, payload }) => {
  switch (type) {
    case "patientName":
      return { ...state, patientName: payload };

    case "date":
      return { ...state, date: payload };

    case "time":
      return { ...state, time: payload };

    case "status":
      return { ...state, status: payload };

    case "RESET":
      return initState;

    default:
      return state;
  }
};
function Appointment() {
  const [state, dispatch] = useReducer(reducer, initState);
  const [data, setData] = useState([]);
  const toast = useToast();

  const { patientName, date, time, status } = state;
  const postData = () => {
    axios
      .post(`https://medwise.onrender.com/appointments`, {
        patientName: patientName,
        date: date,
        time: time,
        status: "Booked",
      })
      .then(() => getData())
      .catch((err) => console.log(err));
  };

  const getData = () => {
    axios
      .get(`https://medwise.onrender.com/appointments`)
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => console.log(err));
  };

  const deleteData = (id) => {
    axios
      .delete(`https://medwise.onrender.com/appointments/${id}`)
      .then(() => getData())
      .catch((err) => console.log(err));

    toast({
      title: "Appointment Deleted",
      status: "error",
      duration: 2000,
      isClosable: true,
    });
  };

  const toggleStatus = (id) => {
    axios
      .patch(`https://medwise.onrender.com/appointments/${id}`, {
        status: "Cancelled",
      })
      .then(() => getData())
      .catch((err) => console.log(err));

    toast({
      title: "Appointment Cancelled",
      status: "error",
      duration: 2000,
      isClosable: true,
    });
  };

  useEffect(() => {
    getData();
  }, []);

  const handleChange = (e) => {
    const { name, type, value } = e.target;

    dispatch({ type: name, payload: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "RESET" });
    console.log(state);
    postData();

    toast({
      title: "Appointment Booked Successfull",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
  };

  return (
    <Box>
      <Heading>Book Appointment & Consult with a Doctor</Heading>

      <Flex
        m="30px"
        display={{ base: null, sm: null , md: "flex", lg: "flex", xl: "flex" }}
        justifyContent={"space-evenly"}
        gap={"20px"}
      >
        <Box
          p={"20px 20px 20px 20px"}
          boxSize={"borderBox"}
          style={{
            boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
            boxSizing: "border-box",
          }}
          border={"1px solid #DDE6ED"}
          borderRadius={"20px"}
          w={{ base: "sm", sm: "sm", md: "md", lg: "lg", xl: "lg" }}
        >
          <form onSubmit={handleSubmit}>
            <FormControl
              size={{ base: "xs", sm: "xs", md: "md", lg: "lg", xl: "lg" }}
              textAlign={"left"}
            >
              <FormLabel>Patient Name</FormLabel>
              <Input
                type="text"
                name="patientName"
                placeholder="Enter Patient Name"
                mb={"10px"}
                value={patientName}
                onChange={handleChange}
                required
                // size={{ base: "sm", sm: "sm", md: "md", lg: "md", xl: "md" }}
              />

              <FormLabel>Tell us your symptom or health problem</FormLabel>
              <Textarea placeholder="E.g: fever, headache" mb={"10px"} />

              <FormLabel>Select Date</FormLabel>
              <Input
                type="date"
                mb={"10px"}
                value={date}
                onChange={handleChange}
                name="date"
                required
                // size={{ base: "sm", sm: "sm", md: "md", lg: "md", xl: "md" }}
              />

              <FormLabel>Select Time </FormLabel>
              <Input
                type="time"
                value={time}
                onChange={handleChange}
                name="time"
                required
                // size={{ base: "sm", sm: "sm", md: "md", lg: "md", xl: "md" }}
              />
              <FormHelperText mb={"10px"}>
                Select Time Between 11.30 AM to 09.00 PM
              </FormHelperText>

              <FormLabel>Patient Blood Group</FormLabel>
              <Select placeholder="--Select Blood Group--" mb={"10px"} required >
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
              </Select>

              <Center>
                <Button mt={"6px"} mb={0} colorScheme="messenger" type="submit">
                  Book Appointment
                </Button>
              </Center>
            </FormControl>
          </form>
        </Box>

        <Box justifyContent={"center"} >
          <Heading
            as="h3"
            size={"md"}
            m="auto"
            mb="10px"
            color="red"
            textAlign={"center"}
          >
            Booking History
          </Heading>

          {data.length === 0 ? (
            <Heading as="h3" size={"sm"}>
              You haven't booked any appointments yet.
            </Heading>
          ) : (
            <Box overflow={"auto"}>
              <VStack
                textAlign={"left"}
                height={"550px"}
                w={{base: "300px", sm: "300px", md: "500px", lg: "500px", xl: "500px"}}
                m="auto"
                flexDirection={"column-reverse"}
                justifyContent={"flex-end"}
              >
                {data.map((el) => (
                  <Box
                    key={el.id}
                    style={{
                      boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
                    }}
                    border={"1px solid #DDE6ED"}
                    p="20px"
                    borderRadius={"20px"}
                    w={"400px"}
                    bgColor={"dodgerblue"}
                    color="white"
                  >
                    <Text>
                      Appointment Status:{" "}
                      <Badge
                        colorScheme={el.status === "Booked" ? "green" : "red"}
                      >
                        {el.status}
                      </Badge>
                    </Text>

                    <Text>
                      Patient Name: <strong>{el.patientName}</strong>
                    </Text>
                    <Text>
                      Date of Appointment: <strong>{el.date}</strong>
                    </Text>
                    <Text>
                      Time: <strong>{el.time}</strong>
                    </Text>

                    <HStack mt={"10px"} justifyContent={"center"}>
                      {el.status === "Booked" && (
                        <Button onClick={() => toggleStatus(el.id)}>
                          Cancel
                        </Button>
                      )}

                      <Button
                        colorScheme="red"
                        onClick={() => deleteData(el.id)}
                      >
                        Delete
                      </Button>
                    </HStack>
                  </Box>
                ))}
              </VStack>
            </Box>
          )}
        </Box>
      </Flex>

      <Footer />
    </Box>
  );
}

export default Appointment;
