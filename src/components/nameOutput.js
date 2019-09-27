// the random selected name
import React from "react";
import "./nameOutput.css";

const NameOutput = ({ name }) => {
  const [randomElement, setRandomElement] = React.useState("");
  const [click, setClick] = React.useState(0);

  React.useEffect(() => {
    const oneName = name.split(",");
    const randomIndex = Math.floor(Math.random() * oneName.length);
    const randomName = oneName[randomIndex];
    setRandomElement(randomName);
  }, [click]);

  const handleClick = () => {
    setClick(e => e + 1);
  };

  return (
    <section className="nameOutput">
      <h2>It's your turn:</h2>
      <h1>{randomElement}</h1>
      <button onClick={handleClick} className="shake">
        Next Player
      </button>
    </section>
  );
};

export { NameOutput };
