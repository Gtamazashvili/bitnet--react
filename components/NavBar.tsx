import logo from "../src/assets/logo.png";
import { useNavigate } from "react-router-dom";

export default function NavBar() {
  const navigate = useNavigate();

  return (
    <div className="startDiv">
      <img
        src={logo}
        alt=""
        className="bitnetLogo"
        id="bitnetLogo"
        onClick={() => navigate("/")}
      />
      <div className="headingOptions">
        <button id="aboutButton1" onClick={() => navigate("/about")}>
          About
        </button>
        <button>Fees</button>
        <button id="faqButton" onClick={() => navigate("/faq")}>
          FAQ
        </button>
        <button id="contactButton">Contact</button>
      </div>
      <div className="logInAndRegister">
        <button className="logIn">Log in</button>
        <div className="blueButton">
          <button className="register">Register</button>
        </div>
      </div>
    </div>
  );
}
