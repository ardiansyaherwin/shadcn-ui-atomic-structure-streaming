import { Suspense } from "react";
import RecipeList, {
  RecipeListSkeleton,
} from "@/components/organisms/recipe-list";

export default function Home() {
  return (
    <main>
      <div className="grid grid-cols-3 gap-8">
        <Suspense fallback={<RecipeListSkeleton />}>
          <RecipeList />
        </Suspense>
      </div>
    </main>
  );
}
