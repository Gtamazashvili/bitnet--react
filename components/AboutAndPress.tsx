import { useState } from "react";
export function AboutAndPress({
  setChecker,
}: {
  setChecker: (value: string) => void;
}) {
  const [selectedTab, setSelectedTab] = useState("whoWeAre");
  function aboutButtonPressed() {
    setChecker("whoWeAre");
    setSelectedTab("whoWeAre");
  }

  function pressButtonPressed() {
    setChecker("press");
    setSelectedTab("press");
  }

  return (
    <div className={"aboutAndPress"}>
      <div
        className={
          selectedTab === "whoWeAre" ? "selectedButtonDiv" : "buttonDiv"
        }
      >
        <p
          className={selectedTab === "whoWeAre" ? "black" : "about"}
          id="aboutButton"
          onClick={aboutButtonPressed}
        >
          About
        </p>
      </div>

      <div
        className={selectedTab === "press" ? "selectedButtonDiv" : "buttonDiv"}
      >
        <p
          className={selectedTab === "press" ? "black" : "press"}
          id="pressButton"
          onClick={pressButtonPressed}
        >
          Press
        </p>
      </div>
    </div>
  );
}
