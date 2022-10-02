import { Route, Routes } from "react-router-dom";
import AboutUs from "./AboutUs";
import Products from "./Products";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { AppContextProvider } from "./context";
import Home from "./Home";
import './styles/app.css';

export default function App() {

  return (
    <AppContextProvider>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/products" element={<Products />} />
      </Routes>

      <Footer />
    </AppContextProvider>
  );
}