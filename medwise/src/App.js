import "./App.css";
import { Box } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import All_Routes from "./All_Routes/All_Routes";
function App() {
  return (
    <Box className="App">
      <Navbar />
      <All_Routes />
    </Box>
  );
}

export default App;
