import data from "../data.json";

function RecipeDetail() {

    function openRecipe(){
        window.open()
    }
  return (
    <>
      <div className="rounded-md bg-yellow-300 px-2 py-2 border-2 hover:bg-green-300 shadow-lg shadow-pink-500/50 " onClick={"openRecipe"}>
        <p className="text-xl" >{recipe.title}</p>
        <p>{recipe.summary}</p>
        <img
          className="w-120 h-120 rounded-full border-1  "
          src="{recipe.img}" //alt="food"
        />
      </div>
    </>
  );
}

export default RecipeDetail;
