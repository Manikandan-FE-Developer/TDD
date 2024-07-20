import React, { useState } from 'react';

const Calc = () => {
  const [number1, setNumber1] = useState('');
  const [number2, setNumber2] = useState('');
  const [result, setResult] = useState('');

  const handleAdd = () => {
    setResult(Number(number1) + Number(number2));
  };

  return (
    <div className="container">
      <input
        type="number"
        value={number1}
        onChange={(e) => setNumber1(e.target.value)}
        placeholder="Enter number 1"
      />
      <br />
      <input
        type="number"
        value={number2}
        onChange={(e) => setNumber2(e.target.value)}
        placeholder="Enter number 2"
      />
      <br />
      <button onClick={handleAdd}>+</button>
      <br />
      <input
        type="number"
        value={result}
        readOnly
      />
      <br />
    </div>
  );
};

export default Calc;