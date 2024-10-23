import React from "react";
import "tailwindcss/tailwind.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Dashbord from "./pages/dashbord/Dashbord";

const App = () => {
  const location = useLocation();

  return (
    <div style={{ display: "flex" }}>
      <div style={{ flex: 1 }}>
        <Routes>
         
          <Route path="/" element={<Dashbord/>} />
          {/* You can add more routes here as needed */}
          {/* <Route path="/page2" element={<Page2 />} />
          <Route path="/page3" element={<Page3 />} /> */}
        </Routes>
      </div>
    </div>
  );
}

const AppWithRouter = () => (
  <Router>
    <App />
  </Router>
);

export default AppWithRouter;
