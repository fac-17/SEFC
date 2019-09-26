// the random selected name
import React from "react";

const NameOutput = ({ name }) => {
  const oneName = name.split(",");
  const randomIndex = Math.floor(Math.random() * oneName.length);
  const randomElement = oneName[randomIndex];

  return (
    <div>
      <h1>{randomElement}</h1>
      <button className="shake">Next Player</button>
    </div>
  );
};
export { NameOutput };
