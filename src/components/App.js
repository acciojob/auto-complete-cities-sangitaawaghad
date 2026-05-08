
import React from "react";
import './../styles/App.css';
import Autocomplete from "./Autocomplete";

const App = () => {
   const citySuggestions = [
    "New York",
    "Los Angeles",
    "Chicago",
    "Houston",
    "Phoenix",
    "San Francisco",
    "Mumbai",
    "Pune",
    "Delhi",
    "Bangalore"
  ];
  return (
    <div>
        {/* Do not remove the main div */}

    <Autocomplete suggestions={citySuggestions} />;
    </div>
  )
}

export default App
