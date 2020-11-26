import React from "react";


export const Main: React.FC = () => {
  const continents = [`North America`, `South America`, `Africa`, `Asia`, `Europe`];
  return(
    <main>
      <input type="search" name="search" id="search" placeholder="Search"/>
      <select name="continents" id="continents">
        {continents.map((continent, i) => <option key={i} value={continent}>{continent}</option>)}
      </select>
    </main>
  );
};