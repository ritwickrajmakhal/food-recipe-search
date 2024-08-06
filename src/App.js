import "./App.css";
import loader from "./loader.gif";
import Card from "./components/Card";
import NavBar from "./components/Navbar";
import { useState } from "react";

function App() {
  const [searchText, setSearchText] = useState("");
  const [result, setResult] = useState([]);
  const searchRecipe = async () => {
    setResult(<img className="img-fluid" src={loader} alt="loader" />);
    let response = await fetch(
      `https://api.edamam.com/api/recipes/v2?app_id=${
        process.env.REACT_APP_EDAMAM_APP_ID
      }&app_key=${
        process.env.REACT_APP_EDAMAM_API_KEY
      }&q=${searchText.toLowerCase()}&type=public`,
      {
        method: "GET",
      }
    );

    let data = await response.json();
    if (data["hits"].length) {
      let recipes = data["hits"].map((item) => {
        return [
          {
            label: item["recipe"]["label"],
            image: item["recipe"]["image"],
            ingredientLines: item["recipe"]["ingredientLines"],
          },
        ];
      });
      setResult(
        <>
          {recipes.map((recipe, index) => {
            return <Card key={index} recipe={recipe[0]} />;
          })}
        </>
      );
    } else setResult(<h3>{searchText} is not found</h3>);
  };
  return (
    <div className="App">
      <NavBar
        title="Food Recipe"
        searchText={searchText}
        handleChange={(event) => setSearchText(event.target.value)}
        searchRecipe={searchRecipe}
      />
      <div className="container d-flex gap-3 flex-wrap py-3 justify-content-center">
        {result}
      </div>
    </div>
  );
}

export default App;
