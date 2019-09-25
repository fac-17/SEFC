import React from "react";
// here we going to have check box

const TruthOrDare = () => {
  const [selection, setSelection] = React.useState("Truth");
  const handleChange = event => {
    setSelection(event.target.value);
    console.log(selection);
  };
  return (
    <div>
      <label htmlFor="Truth">
        Truth
        <input
          id="Truth"
          type="radio"
          name="truthordare"
          value="Truth"
          checked={selection === "Truth"}
          onChange={handleChange}
        />
      </label>
      <label htmlFor="Dare">
        Dare
        <input
          id="Dare"
          type="radio"
          name="truthordare"
          value="Dare"
          checked={selection === "Dare"}
          onChange={handleChange}
        />
      </label>
    </div>
  );
};

export { TruthOrDare };
