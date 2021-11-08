import React from "react";
import "./suggestions.scss";
const Suggestions = (props) => {
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
  return options.length > 0 ? (
    <div className="suggestionsWrapper">
      <ul>{options}</ul>
    </div>
  ) : (
    <></>
  );
};

export default Suggestions;
