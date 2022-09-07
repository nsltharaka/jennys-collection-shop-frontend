import { useState } from "react";
import Header from "./components/header/Header";
// import Hero from "./components/Hero";

export default function App() {

  const [mobileNavOpen, setMobileNavOpen] = useState(false)

  return (
    <div className="container">
      <Header
        mobileNavOpen={mobileNavOpen}
        setMobileNavOpen={setMobileNavOpen} />
      {/* <Hero /> */}
    </div>
  );
}