import React from "react";
import Product from "./Components/Product";
import "./App.css";

const App = () => {
  return (
    <div>
      <h1>Main Component</h1>

      <Product
        name="Samsung M55"
        price="20000"
        specs={{ ram: "8gb", storage: "128gb" }}
        category={["Electronics", "Mobiles"]}
      />

      <Product
        name="Iphone 13 pro"
        price="20000"
        specs={{ ram: "8gb", storage: "128gb" }}
        category={["Electronics", "Mobiles"]}
      />

      <Product
        name="Realme 9 pro"
        price="20000"
        specs={{ ram: "8gb", storage: "128gb" }}
        category={["Electronics", "Mobiles"]}
      />
    </div>
  );
};

export default App;
