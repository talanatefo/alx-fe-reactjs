import { useEffect, useState } from "react";
import data from "../data.json";

//console.log(data);

function HomePage() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => setRecipes(data), []);

  return (
    <div className=" px-2px">
      <h1 className="text-xl mx-auto">HomePage</h1>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 w-196 h-196 px-5px mx-10px">
        {recipes.map((recipe) => (
          <div key={recipe.id}>
            <div className="rounded-md bg-yellow-300 px-2 py-2 border-2 hover:bg-green-300 shadow-lg shadow-pink-500/50 ">
              <p className="text-xl">{recipe.title}</p>
              <p>{recipe.summary}</p>
              <img
                className="w-120 h-120 rounded-full border-1  "
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
