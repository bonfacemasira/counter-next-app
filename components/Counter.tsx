"use client";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { Minus, Plus } from "lucide-react";
import Search from "./Search";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const [counterList, setCounterList] = useState<number[]>([]);
  const [filteredCounterList, setFilteredCounterList] = useState<number[]>([]);

  const handleCounterPlus = () => {
    setCounter(counter + 1);
    setCounterList([...counterList, counter]);
    setFilteredCounterList([...counterList, counter]);
  };

  const handleCounterMinus = () => {
    setCounter(counter - 1);
    setCounterList([...counterList, counter]);
    setFilteredCounterList([...counterList, counter]);
  };

  React.useEffect(() => {
    setFilteredCounterList(counterList);
  }, [counterList]);

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
            position: "relative",
            top: "30vh",
            marginRight: "5px",
          }}
          variant={"destructive"}
          onClick={handleCounterMinus}
        >
          <Minus className="mr-2 h-4 w-4" /> Decrement
        </Button>
        <Button
          style={{
            position: "relative",
            top: "30vh",
            marginLeft: "5px",
            backgroundColor: "green",
          }}
          onClick={handleCounterPlus}
        >
          <Plus className="mr-2 h-4 w-4" /> Increment
        </Button>
      </div>
      <Search
        counterList={counterList}
        setFilteredCounterList={setFilteredCounterList}
      />
      <div>
        {filteredCounterList.map((count, index) => (
          <div
            key={index}
            style={{
              fontSize: "100%",
              display: "inline",
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
