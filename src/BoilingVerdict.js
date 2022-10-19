import React from "react";

export default function BoilingVerdict({ temp }) {
  return <h2>The water would {temp < 100 && "not"} boil.</h2>;
}
