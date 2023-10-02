import "./About.css";
import { AboutAndPress } from "../../components/AboutAndPress"; 
import Press from "../../components/Press";
import WhoWeAre from "../../components/WhoWeAre";
import { useState } from "react";

export default function About() {
  const [selectedTab, setSelectedTab] = useState("whoWeAre"); 

  return (
    <>
      <AboutAndPress setChecker={setSelectedTab} />
      {selectedTab === "whoWeAre" && <WhoWeAre />}
      {selectedTab === "press" && <Press />}
    </>
  );
}
