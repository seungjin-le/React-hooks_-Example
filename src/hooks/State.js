import React,{useState} from 'react';

const State = () => {
  const [value, setValue] = useState(0);
  return (
    <div>
      <p>
        현제 카운터 값은  <b>{value}</b> 입니다
      </p>
      <button onClick={() => setValue(value +1)}>+1</button>
      <button onClick={() => setValue(value -1)}>-1</button>
    </div>
  );
}

export default State;
