// Get an array of input nameS from the player
// At the beggining of the game
import React from "react";

const NameInput = ({ name, setName }) => {
  const [tempName, setTempName] = React.useState("");
  return (
    <section className="nameInput">
      <h3>
        Enter all
        <br />
        players names
        <br />
      </h3>
      <p>seperated by a comma</p>
    <form
      className="nameInput"
      onSubmit={event => {
        event.preventDefault();
        setName(tempName);
      }}
    >
      <input
        type="text"
        value={tempName}
        onChange={event => {
          setTempName(event.target.value);
        }}
      />
      <button className="nameInputSubmit" type="Submit">
        Submit
      </button>
    </form>
  </section>
  );
};

export { NameInput };
