import { useEffect, useRef, useState } from "react";

export default function Search({ query, setQuery }) {
  const searchEl = useRef(null);
  useEffect(
    function () {
      function callback(e) {
        if (e.code === "Enter" && document.activeElement === searchEl.current) {
          searchEl.current.focus();
          setQuery("");
        }
      }

      document.addEventListener("keydown", callback);
      return () => document.removeEventListener("keydown", callback);
    },
    [setQuery]
  );
  return (
    <input
      className="search"
      type="text"
      placeholder="Search movies..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      ref={searchEl}
    />
  );
}
