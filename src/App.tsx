import MainPage from "../pages/MainPage/MainPage";
import FaqPage from "../pages/FaqPage/FaqPage";
import About from "../pages/About/About";
import { Routes, Route } from "react-router-dom";
import NavBar from "../components/NavBar";
import Closing from "../components/Closing";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Closing />
    </>
  );
}

export default App;
