//import { useState } from "react";
import "./App.css";
import Topbar from "./components/Header/Topbar";
import Middle from "./components/Header/Middle";
import NavBar from "./components/Header/NavBar";
import Footer from "./components/Footer/Footer";
import HeroSection  from "./components/Mid.jsx/HeroSection";
import CategorySlider  from "./components/Mid.jsx/CategorySlider";

function App() {
  //const [count, setCount] = useState(0);

  return (
    <>
    <Topbar/>
    <Middle/>
      <hr className="w-full border-t border-gray-300 my-0"/>
    <NavBar/>

    <HeroSection/>
    <CategorySlider/>
    <Footer/>
    
      
    </>
  );
}

export default App;
