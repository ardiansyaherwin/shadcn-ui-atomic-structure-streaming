import { Recipe } from "@/lib/type";
import RecipeCard, {
  RecipeCardSkeleton,
} from "@/components/molecules/recipe-card";
import { Fragment } from "react";

async function getRecipes(): Promise<Recipe[]> {
  const result = await fetch("http://localhost:4000/recipes"); // local json-server endpoint host
  // mock delay
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return result.json();
}

const RecipeList = async () => {
  const recipes = await getRecipes();
  return (
    <>
      {recipes?.map((recipe) => (
        <Fragment key={recipe.id}>
          <RecipeCard data={recipe} />
        </Fragment>
      ))}
    </>
  );
};

export const RecipeListSkeleton = () => (
  <>
    {"123456789".split("").map((i) => (
      <Fragment key={i}>
        <RecipeCardSkeleton />
      </Fragment>
    ))}
  </>
);

export default RecipeList;
