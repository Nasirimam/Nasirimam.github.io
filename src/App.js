import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Nevbar/Nevbar";
import Home from "./Pages/Home";
import { Box } from "@chakra-ui/react";
import About from "./Pages/About";
import Skills from "./Pages/Skills";
import Project from "./Pages/Project";
import Contect from "./Pages/Contect";
import Resume from "./Pages/Resume";
import AllRoutes from "./Pages/AllRoutes";
import SideBar from "./Nevbar/Sidebar";

function App() {
  return (
    <Box className="App">
      <Navbar />
      {/* <AllRoutes /> */}
      <Home />
      <About />
      <Skills />
      <Project />
      <Contect />
      <Resume />
    </Box>
  );
}

export default App;
