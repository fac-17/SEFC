// Get an array of input nameS from the player
// At the beggining of the game
import React from "react";

const NameInput = () => {
  const [name, setName] = React.useState("");
  return (
    <input
      type="text"
      value={name}
      onChange={event => setName(event.target.value)}
    />
  );
};

export { NameInput };
