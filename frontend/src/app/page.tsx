import "./globals.css";
import React from "react";
import HeaderComponent from "./Components/Header/Header";
import FooterComponent from "./Components/Footer/Footer";
import AsideDashboard from "./Aside/Aside";
import { BrowserRouter as Router,Route, Routes} from "react-router-dom";
import CreateDashboard from "./Components/Router/dashboard";
import 'leaflet/dist/leaflet.css';
export default function Home() {
  return (
    <div>
      <Router>
        <HeaderComponent/>
          <Routes>
            <Route path= "/dashboard" element= {<CreateDashboard/>}/>
          </Routes>*/
        <AsideDashboard/>
        <FooterComponent/>
      </Router>  
    </div>
  );
}
