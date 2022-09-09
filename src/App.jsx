import { useState } from "react";
import Header from "./components/Header";
import Home from "./Home";
import './styles/app.css';

export default function App() {

  const [mobileNavOpen, setMobileNavOpen] = useState(false)

  return (
    <div className="container">
      <Header
        mobileNavOpen={mobileNavOpen}
        setMobileNavOpen={setMobileNavOpen} />
      <Home />
    </div>
  );
}