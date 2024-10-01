"use client";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { Minus, Plus } from "lucide-react";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const [counterList, setCounterList] = useState<number[]>([]);
  const handleCounterPlus = () => {
    setCounter(counter + 1);
    setCounterList([...counterList, counter]);
  };

  const handleCounterMinus = () => {
    setCounter(counter - 1);
    setCounterList([...counterList, counter]);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "300%",
        position: "absolute",
        width: "100%",
        height: "100%",
        top: "-15%",
      }}
    >
      Counter App
      <div
        style={{
          fontSize: "120%",
          position: "relative",
          top: "10vh",
        }}
      >
        {counter}
      </div>
      <div className="buttons">
        <Button
          style={{
            fontSize: "60%",
            position: "relative",
            top: "20vh",
            marginRight: "5px",
            backgroundColor: "red",
            color: "white",
          }}
          onClick={handleCounterMinus}
        >
          <Minus className="mr-2 h-6 w-6" /> Decrement
        </Button>
        <Button
          style={{
            fontSize: "60%",
            position: "relative",
            top: "20vh",
            marginLeft: "5px",
            backgroundColor: "green",
            color: "white",
          }}
          onClick={handleCounterPlus}
        >
          <Plus className="mr-2 h-6 w-6" /> Increment
        </Button>
      </div>
      <div>
        {counterList.map((count, index) => (
          <div
            key={index}
            style={{
              fontSize: "100%",
              display: "inline",
              marginTop: "20px",
            }}
          >
            {count},
          </div>
        ))}
      </div>
    </div>
  );
};

export default Counter;
