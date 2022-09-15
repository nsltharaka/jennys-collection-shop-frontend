import Header from "./components/Header";
import { AppContextProvider } from "./context";
import Home from "./Home";
import './styles/app.css';

export default function App() {

  return (
    <AppContextProvider>
      <Header />
      <Home />
    </AppContextProvider>
  );
}