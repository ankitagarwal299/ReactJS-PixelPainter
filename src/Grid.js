import React from "react";
import Cell from "./Cell";

export default function Grid({ selectedColor, boardSize, pixelSize }) {
  console.log(typeof boardSize);
  return (
    <div className="grid">
      {/* {new Array(100).fill("").map((el, i) => {
        return <Cell key={i} i={i} selectedColor={selectedColor} />;
      })} */}

      {[...new Array(boardSize)].map((row, rowIndex) => (
        <div className="rows">
          {boardSize}
          {[...new Array(boardSize)].map((col, colIndex) => (
            <Cell
              id={rowIndex}
              className="cols"
              key={colIndex}
              selectedColor={selectedColor}
              pixelSize={pixelSize}
            >
              {rowIndex}-{colIndex}
            </Cell>
          ))}
        </div>
      ))}
    </div>
  );
}
