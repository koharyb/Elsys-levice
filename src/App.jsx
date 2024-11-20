import { useState } from "react";
import "./App.css";
import Navbar from "./sections/Navbar";
import AboutUs from "./sections/AboutUs";
import Contacts from "./sections/Contacts"
import Footer from "./sections/Footer"
import Gallery from "./sections/Gallery";
import Content from "./sections/Content";

function App() {
  const [count, setCount] = useState(0);

  return <div>
    <Navbar/>
    <AboutUs/>
    <Contacts/>
    <Gallery/>
    <Content/>
    <Content/>
    <Content/>
    <Footer/>
  </div>;
}

export default App;
