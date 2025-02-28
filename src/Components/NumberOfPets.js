import React from "react";
import { useState } from "react";
import "./NumberOfPets.css";

const NumberOfPets = () => {
  const [count, setCount] = useState(0);
 
  

  const handleIncrement = () =>{
    setCount(count + 1)
    
  }

  const handleDecrement = () =>{
    if(count === 0){
      setCount(0)
    }else{
      setCount(count - 1)
    }
  }

    return (
      <section className="num-of-pets">
        <h4>Number of Pets</h4>
        <h5>{count}</h5>
        <div>
          <button id="less" onClick={handleDecrement}>-</button>
          <button id="more" onClick={handleIncrement}>+</button>
        </div>
      </section>
    );
}

export default NumberOfPets;
