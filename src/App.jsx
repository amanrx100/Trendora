//import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Middle from "./components/Header/Middle";
import Last from "./components/Header/Last";
import Footer from "./components/Footer/Footer";

function App() {
  //const [count, setCount] = useState(0);

  return (
    <>
    <Header/>
    <Middle/>
      <hr className="w-full border-t border-gray-300 my-0"/>
    <Last/>
    <Footer/>
    
      
    </>
  );
}

export default App;
