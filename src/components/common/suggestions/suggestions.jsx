import React from "react";
import "./suggestions.scss";
const Suggestions = (props) => {
  let keySearch = props.keySearch;

  const options =
    props.results &&
    props.results.map((suggestion, index) => {
      return (
        <li
          onClick={() => props.onClick(suggestion.value)}
          title={suggestion.value}
          key={index}
        >
          {suggestion.value}
        </li>
      );
    });
  return (
    options && (
      <div
        className="suggestionsWrapper"
        style={{ display: keySearch !== "" ? "block" : "none" }}
      >
        <ul>{options}</ul>
      </div>
    )
  );
};

export default Suggestions;
