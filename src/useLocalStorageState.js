import { useState, useEffect } from "react";

export function useLocalStorageState(initialState, key) {
  const [value, setValue] = useState(function () {
    const storedValue = localStorage.getItem(key); // fetching watched movies data stored in local storage
    return storedValue ? JSON.parse(storedValue) : initialState;
  });

  // saving/storing movies to a local storage using effect
  useEffect(
    function () {
      localStorage.setItem(key, JSON.stringify(value));
    },
    [value, key]
  );

  return [value, setValue];
}
