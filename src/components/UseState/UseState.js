import React, {useState} from 'react';

const StateLearning = () => {
  const [counter, setCounter] = useState(0);
  const [inputvalue, setInputValue] = useState("some value");

  const increment = () => {
      setCounter(counter + 1);
  };

  let onChange = (e) => {
    setInputValue(e.target.value);
  }

  return(
    <>
      <div> 
        {counter} 
        <button onClick={increment}>Increment the value</button>
      </div>
      <div>
        <input placeholder="add new value .." onChange={onChange}/>
        {inputvalue}
      </div>
    </>
  );
};

export default StateLearning;