import React, { useState } from "react";

const scaleNames = {
  c: "Celsius",
  f: "Farenheit",
};

export default function TempretureInput({ scale, temp, chngObj }) {
  const handleChange = (e) => {
    const inputValue = e.target.value;
    chngObj((prev) => ({
      temperature: isNaN(inputValue) ? prev.temperature : inputValue,
      s: scale,
    }));
    console.log(temp);
  };
  return (
    <fieldset>
      <legend>
        <h3>Enter temperature in {scaleNames[scale]}:</h3>
      </legend>
      <input type="text" value={temp} onChange={handleChange} />
    </fieldset>
  );
}
