//import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Topbar from "./components/Header/Topbar";
import Middle from "./components/Header/Middle";
import NavBar from "./components/Header/NavBar";
import Footer from "./components/Footer/Footer";
import HeroSection  from "./components/Mid.jsx/HeroSection";
import CategorySlider  from "./components/Mid.jsx/CategorySlider";
import NewsSection  from "./components/Mid.jsx/NewsSection";
//import BestSeller from "./components/Mid.jsx/BestSeller";
import ShopByBrands from "./components/Mid.jsx/ShopByBrands";
import BlueBox from "./components/Mid.jsx/BlueBox";
import PromotionalBanner from "./components/Mid.jsx/PromotionalBanner";
import FlashSale from "./components/Mid.jsx/FLashSale";
import ProductSlide from "./components/Mid.jsx/ProductSlide";
import ProductSlider2 from "./components/Mid.jsx/ProductSlider2";
import Offer from "./components/Mid.jsx/Offer";
import HotDeals from "./components/Mid.jsx/HotDeals";
import Login from "./pages/Login/Login"
import Register from "./pages/Register/Register";


function App() {
  return (
    <Router>
      <Topbar />
      <Middle />
      <hr className="w-full border-t border-gray-300 my-0" />
      <NavBar />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <CategorySlider />
              <PromotionalBanner />
              <ProductSlide />
              <FlashSale />
              <ProductSlider2 />
              <Offer />
              <HotDeals />
              <BlueBox />
              <ShopByBrands />
              {/* <BestSeller /> */}
              <NewsSection />
            </>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
