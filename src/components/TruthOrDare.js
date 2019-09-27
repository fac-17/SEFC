import React from "react";
import "./truthOrDare.css";
// here we going to have check box

const TruthOrDare = ({ selection, setSelection }) => {
  const handleChange = event => {
    setSelection(event.target.value);
  };
  return (
    <div className="checkbox">
      <label htmlFor="Truth">
        Truth
        <input className="bothCheckbox"
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
        <input className="bothCheckbox"
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
