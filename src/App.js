import './App.css';
import Card from './components/Card';
import NavBar from './components/Navbar';
import { useState } from 'react';

function App() {
  const [searchText, setSearchText] = useState("")
  const [result, setResult] = useState([])
  const searchRecipe = async () => {
    let response = await fetch(`https://api.edamam.com/api/recipes/v2?app_id=78fb8b29&app_key=25c51a8d116093a130c0b076e7b501ec&q=${searchText.toLowerCase()}&type=public`, {
      method: "GET"
    });

    let data = await response.json();
    let recipes = data["hits"].map((item)=>{
      return [{label : item["recipe"]["label"],
                image : item["recipe"]["image"],
                ingredientLines : item["recipe"]["ingredientLines"]}]
    })
    setResult(
      <>
      {recipes.map((recipe,index)=>{
        return <Card key={index} recipe = {recipe[0]} />
      })}
      </>
    )
  }
  return (
    <div className="App">
      <NavBar title="Food Recipe" searchText={searchText} handleChange={(event) => setSearchText(event.target.value)} searchRecipe={searchRecipe} />
      <div className="container d-flex gap-3 flex-wrap py-3 justify-content-center">
        {result}
      </div>
    </div>
  );
}

export default App;
