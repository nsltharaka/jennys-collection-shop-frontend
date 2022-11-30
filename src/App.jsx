import { Route, Routes } from "react-router-dom";
import AboutUs from "./AboutUs";
import Products from "./Products";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { AppContextProvider } from "./context";
import Home from "./Home";
import './styles/app.css';
import Cart from "./Cart";
import { ScrollToTop } from "./ScrollToTop";

export default function App() {

  return (
    <AppContextProvider>
      <Header />

      <ScrollToTop>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </ScrollToTop>

      <Footer />
    </AppContextProvider>
  );
}