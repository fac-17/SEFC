// Get an array of input nameS from the player
// At the beggining of the game
import React from "react";
import "./nameInput.css";

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
      <p>SEPERATED BY A COMMA</p>
      <form
        className="nameInput"
        onSubmit={event => {
          event.preventDefault();
          setName(tempName);
        }}
      >
        <input
          class="enterName"
          type="text"
          required
          value={tempName}
          onChange={event => {
            setTempName(event.target.value);
          }}
        />
        <br />
        <button className="nameInputSubmit" type="Submit">
          Submit
        </button>
      </form>
    </section>
  );
};

export { NameInput };
