// Get an array of input nameS from the player
// At the beggining of the game
import React from "react";

const NameInput = ({name, setName}) => {
  const [tempName, setTempName] = React.useState("");
  return (
    <form className="nameInput"
    onSubmit = {(event) => {
      event.preventDefault();
      setName(tempName);
      console.log(tempName)
    }}
    >

    <input
      type="text"
      value={tempName}
      onChange={event => {
        setTempName(event.target.value);

        console.log(tempName);
      }}
    />

    <button className="nameInputSubmit" type="Submit">Submit</button>
    </form>
  );
};

export { NameInput };
