import React, { useState } from "react";
/* import { render } from "react-dom"; */
import { Link, Router } from "@reach/router";
import SearchParams from "./SearchParams";
import Details from "./Details";
import themeContext from "./ThemeContext";

const App = () => {
  const themeHook = useState("peru");
  return (
    <themeContext.Provider value={themeHook}>
      <div>
        <header>
          <Link to="/">Adopt Me!</Link>
        </header>
        <Router>
          <SearchParams path="/" />
          <Details path="/details/:id" />
        </Router>
      </div>
    </themeContext.Provider>
  );
};

export default App;
