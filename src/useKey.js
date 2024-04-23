import { useEffect } from "react";

export function useKey(key, action) {
  // Adding a key press event by using useEffect
  useEffect(
    function () {
      function callback(e) {
        if (e.code.toLowerCase() === key.toLowerCase()) {
          action();
        }
      }

      document.addEventListener("keydown", callback);

      // cleaning up key press event listener
      return function () {
        document.removeEventListener("keydown", callback);
      };
    },
    [key, action]
  );
}
