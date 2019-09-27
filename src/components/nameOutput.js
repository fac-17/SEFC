// the random selected name
import React from "react";

const NameOutput = ({ name }) => {
  const oneName = name.split(",");
  const randomIndex = Math.floor(Math.random() * oneName.length);
  const randomElement = oneName[randomIndex];

  return (

    <section className="nameOutput">
      <h2>It's your turn:</h2>
      <h1>{randomElement}</h1>
      <button className="shake">Next Player</button>
      </section>

  );
};
export { NameOutput };
