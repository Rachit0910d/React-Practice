import React from "react";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import { Route, Routes } from "react-router-dom";
import About from "./Pages/About";
import Product from "./Pages/Product";
import Notfound from "./Pages/Notfound";
import Men from "./Pages/Men";
import Courses from "./Pages/Courses";
import CoursesDetail from "./Pages/CoursesDetail";
import Navbar2 from "./Components/Navbar2";

const App = () => {
  return (
    <div className="h-screen w-full bg-black text-white">
      <Navbar />
      <Navbar2 />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path='/courses' element={<Courses />} />
        <Route path='/courses/:id' element={<CoursesDetail />} />
        <Route path="/product" element={<Product />}>
          <Route path="men" element={<Men />} />
        </Route>

        <Route path="*" element={<Notfound />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
