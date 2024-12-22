import React, { useState, useEffect } from "react";
import "tailwindcss/tailwind.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Dashbord from "./pages/dashbord/Dashbord";
import Sidebar from "./components/Sidebar/Sidebar"; 
import From from "./components/table/From";

const App = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 375 ||window.innerWidth <= 468 || window.innerWidth <= 768 || window.innerWidth <= 992 || window.innerWidth <= 1200);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="container">
      <div style={{ display: "flex" }}>
        {isSmallScreen && <Sidebar />}
        
        <div style={{ flex: 2 }}>
          <Routes>
            {isSmallScreen ? (
              <Route path="/" element={<From/>} />
            ) : (
              <Route path="/" element={<Dashbord />} />
            )}
          </Routes>
        </div>
      </div>
    </div>
  );
};

const AppWithRouter = () => (
  <Router>
    <App />
  </Router>
);

export default AppWithRouter;
