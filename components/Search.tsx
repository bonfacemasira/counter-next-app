"use client";
import React from "react";
import { useDebouncedCallback } from "use-debounce";

interface CounterSearchProps {
  counterList: number[];
  setFilteredCounterList: React.Dispatch<React.SetStateAction<number[]>>;
}

const Search: React.FC<CounterSearchProps> = ({
  counterList,
  setFilteredCounterList,
}) => {
  const debouncedSearch = useDebouncedCallback((searchQuery: string) => {
    const filteredList = counterList.filter((count) =>
      count.toString().includes(searchQuery)
    );
    setFilteredCounterList(filteredList);
  }, 500);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchQuery = e.target.value;
    debouncedSearch(searchQuery);
  };

  return (
    <input
      type="text"
      placeholder="Search counter values..."
      onChange={handleSearch}
      style={{
        marginTop: "20px",
        padding: "10px",
        fontSize: "100%",
      }}
    />
  );
};

export default Search;
