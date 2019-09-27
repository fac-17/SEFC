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
  }, [click, name]);

  const handleClick = () => {
    setClick(e => e + 1);
  };

  return (
    <div className="nameOutput">
      <h1 className="nameOutputh1">{randomElement}</h1>
      <h3 className="nameOutputh3">It's your turn to play!</h3>
      <button className="outputButton">Next Player</button>
    </div>

  );
};

export { NameOutput };
