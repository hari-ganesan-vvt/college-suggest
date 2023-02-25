import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Predictor from "./pages/PredictorPage/Predictor";
import Navbar from "./components/nav/Navbar";
import OverallRank from "./pages/overallRank/OverallRank";
import LoginSidebar from "./components/loginSidebar/LoginSidebar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "swiper/css/navigation";
import "swiper/css";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/predictor" element={<Predictor />} />
          <Route path="/overallrank" element={<OverallRank />} />
        </Routes>
        <LoginSidebar />
        <ToastContainer
          position="top-center"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable={false}
          pauseOnHover={false}
          theme="light"
        />
      </BrowserRouter>
    </div>
  );
};

export default App;
