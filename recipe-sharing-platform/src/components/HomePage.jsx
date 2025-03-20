import { useEffect, useState } from "react";
import data from "../data.json";

//console.log(data);

function HomePage() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => setRecipes(data), []);

  return (
    <div className="bg-green-300 ">
      <h1 className="text-xl">HomePage</h1>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-4">
        {recipes.map((recipe) => (
          <div key={recipe.id}>
            <div className="rounded-md bg-white px-2 py-2">
              <p className="text-xl">{recipe.title}</p>
              <p>{recipe.summary}</p>
              <img
                className="w-100"
                src="{recipe.img}" //alt="food"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default HomePage;
