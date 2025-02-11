import "./globals.css";
import HeaderComponent from "./Components/Header/Header";
import FooterComponent from "./Components/Footer/Footer";
import AsideDashboard from "./Aside/Aside";
import 'leaflet/dist/leaflet.css';
export default function Home() {
  return (
    <div>
        <HeaderComponent/>
        <AsideDashboard/>
        <FooterComponent/>
    </div>
  );
}
