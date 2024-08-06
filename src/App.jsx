import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import AllNews from "./components/AllNews";
import Footer from "./components/Footer";
import TopHeadlines from "./components/TopHeadlines";
// import HomePage from "./pages/HomePage"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CountryNews from "./components/CountryNews";

function App() {
  
  return (
    <div className="w-full">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<AllNews />} />
          <Route path="/top-headlines/:category" element={<TopHeadlines />} />
          <Route path="/country/:iso" element={<CountryNews />} /> 
          {/* <Route path="/uploadNews"  element= {<HomePage/>} />  */}
        </Routes>
        {/* <Cards />  */}
        <Footer />  
      </BrowserRouter>
    </div>
  );
}

export default App;
