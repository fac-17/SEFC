// the random selected name
import React from "react";
import "./nameOutput.css";

const NameOutput = ({ name }) => {
  const oneName = name.split(",");
  const randomIndex = Math.floor(Math.random() * oneName.length);
  const randomElement = oneName[randomIndex];

  return (
    <section className="nameOutput">
      <h1 className="nameOutputh1">{randomElement}</h1>
      <h3 className="nameOutputh3">It's your turn to play!</h3>
      <button className="outputButton">Next Player</button>
      </section>

  );
};
export { NameOutput };
