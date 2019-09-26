// Get an array of input nameS from the player
// At the beggining of the game
import React from "react";

const NameInput = ({name, setName}) => {
  return (
    <input
      type="text"
      value={name}
      onChange={event => {
        setName(event.target.value);

        console.log(name);
      }}
    />
  );
};

export { NameInput };
