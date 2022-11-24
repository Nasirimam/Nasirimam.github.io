import { Route, Routes } from "react-router-dom";
import About from "./About";
import Contect from "./Contect";
import Home from "./Home";
import Project from "./Project";
import Resume from "./Resume";
import Skills from "./Skills";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contect" element={<Contect />} />
      <Route path="/project" element={<Project />} />
      <Route path="/resume" element={<Resume />} />
      <Route path="/skills" element={<Skills />} />
    </Routes>
  );
};

export default AllRoutes;
