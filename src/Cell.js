import React, { useState } from "react";

export default function Cell({ selectedColor, pixelSize }) {
  const [color, setColor] = useState("");

  const handleClick = (e) => {
    setColor(selectedColor);
  };

  function handleMouseOver(event) {
    if (event.buttons === 1) {
      setColor(selectedColor);
    }
  }

  return (
    <div
      className="cell"
      style={{ backgroundColor: color, width: pixelSize }}
      onClick={handleClick}
      onMouseOver={handleMouseOver}
    ></div>
  );
}
