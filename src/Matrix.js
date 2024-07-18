import React, { useState } from 'react';
import './Matrix.css';

const Matrix = () => {
  const [colors, setColors] = useState(Array(9).fill('white'));
  const [clickSequence, setClickSequence] = useState([]);

  const handleClick = (index) => {
    const newColors = [...colors];
    newColors[index] = 'green';
    setColors(newColors);
    setClickSequence([...clickSequence, index]);

    if (index === 8) {
      changeAllToOrange(newColors);
    }
  };

  const changeAllToOrange = (newColors) => {
    let i = 0;
    const interval = setInterval(() => {
      if (i < clickSequence.length) {
        newColors[clickSequence[i]] = 'orange';
        setColors([...newColors]);
        i++;
      } else {
        clearInterval(interval);
      }
    }, 500);
  };

  return (
    <div className="matrix">
      {colors.map((color, index) => (
        <div
          key={index}
          className="box"
          style={{ backgroundColor: color }}
          onClick={() => handleClick(index)}
        />
      ))}
    </div>
  );
};

export default Matrix;
