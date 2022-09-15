import { useState } from "react";
import Header from "./components/Header";
import { AppContextProvider } from "./context";
import Home from "./Home";
import './styles/app.css';

export default function App() {

  const [mobileNavOpen, setMobileNavOpen] = useState(false)

  return (
    <AppContextProvider>
      <Header
        mobileNavOpen={mobileNavOpen}
        setMobileNavOpen={setMobileNavOpen} />
      <Home />
    </AppContextProvider>
  );
}