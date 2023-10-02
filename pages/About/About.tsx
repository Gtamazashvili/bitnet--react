import "./About.css";
import { AboutAndPress } from "../../components/AboutAndPress"; // Adjust the import to named import
import Press from "../../components/Press";
import WhoWeAre from "../../components/WhoWeAre";
import { useState } from "react";

export default function About() {
  const [selectedTab, setSelectedTab] = useState("whoWeAre"); // Initialize with "whoWeAre" or any default value

  return (
    <>
      <AboutAndPress setChecker={setSelectedTab} />
      {selectedTab === "whoWeAre" && <WhoWeAre />}
      {selectedTab === "press" && <Press />}
    </>
  );
}
