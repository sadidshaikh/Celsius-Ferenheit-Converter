import React, { useState } from "react";
import BoilingVerdict from "./BoilingVerdict.js";
import TempretureInput from "./TempretureInput.js";

function toCelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}

function toFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

function tryConvert(temp, convert) {
  if(temp === "")return temp;
  const input = parseFloat(temp);
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}

export default function App() {
  const [obj, setObj] = useState({ temperature: "", s: "" });
  const celsius = obj.s==="c" ? obj.temperature : tryConvert(obj.temperature, toCelsius);
  const fahrenheit = obj.s==="f" ? obj.temperature : tryConvert(obj.temperature, toFahrenheit);
  return (
    <>
      <TempretureInput scale="c" chngObj={setObj} temp={celsius} />
      <TempretureInput scale="f" chngObj={setObj} temp={fahrenheit} />
      <BoilingVerdict temp={celsius}/>
    </>
  );
}
