import MainPage from "../pages/MainPage/MainPage";
import FaqPage from "../pages/FaqPage/FaqPage";
import About from "../pages/About/About";
import { Routes, Route } from "react-router-dom";
import NavBar from "../components/NavBar";
import Closing from "../components/Closing";
import "./App.css";
function App() {
  return (
    <div className="mainDiv">
      <NavBar />

      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Closing />
    </div>
  );
}

export default App;
