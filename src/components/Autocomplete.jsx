import React,{ useState } from "react";

const Autocomplete = (props) =>{
  const [inputValue, setInputValue] = useState("");
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);

  // Handle input change
  const handleChange = (e) => {
    const value = e.target.value;
    setInputValue(value);

    if (value.trim() === "") {
      setFilteredSuggestions([]);
      return;
    }

    // Filter matching suggestions
    const filtered = props.suggestions.filter((item) =>
      item.toLowerCase().includes(value.toLowerCase())
    );

    setFilteredSuggestions(filtered);
  };

  // Handle suggestion click
  const handleSuggestionClick = (suggestion) => {
    setInputValue(suggestion);
    setFilteredSuggestions([]);
  };

  return (
    <div style={{ width: "300px", margin: "20px auto" }}>
      <input
        type="text"
        placeholder="Enter city or street"
        value={inputValue}
        onChange={handleChange}
        style={{
          width: "100%",
          padding: "10px",
          fontSize: "16px"
        }}
      />

      {filteredSuggestions.length > 0 && (
        <ul
          style={{
            listStyle: "none",
            padding: 0,
            margin: 0,
            border: "1px solid #ccc"
          }}
        >
          {filteredSuggestions.map((suggestion, index) => (
            <li
              key={index}
              onClick={() => handleSuggestionClick(suggestion)}
              style={{
                padding: "10px",
                cursor: "pointer",
                borderBottom: "1px solid #eee"
              }}
            >
              {suggestion}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};


export default Autocomplete;