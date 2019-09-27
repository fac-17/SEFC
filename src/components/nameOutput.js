// the random selected name
import React from "react";

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
    <div>
      <h1>{randomElement}</h1>
      <button onClick={handleClick} className="shake">
        Next Player
      </button>
    </div>
  );
};

export { NameOutput };
