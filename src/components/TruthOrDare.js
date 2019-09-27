import React from "react";
// here we going to have check box

const TruthOrDare = ({ selection, setSelection }) => {
  const handleChange = event => {
    setSelection(event.target.value);
  };
  return (
    <section className="checkbox">
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
    </section>
  );
};

export { TruthOrDare };
