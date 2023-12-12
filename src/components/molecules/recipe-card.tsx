import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";

import { Recipe } from "@/lib/type";

const RecipeCard = ({ data }: { data: Recipe }) => {
  return (
    <Card key={data.id} className="flex flex-col justify-between">
      <CardHeader className="flex-row gap-4 items-center">
        <Avatar>
          <AvatarImage src={`/img/${data.image}`} alt={data.title} />
          <AvatarFallback>{data?.title?.slice(0, 2)}</AvatarFallback>
        </Avatar>
        <div>
          <CardTitle>{data.title}</CardTitle>
          <CardDescription>{data.time} mins to cook.</CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <p>{data.description}</p>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button>View Recipe</Button>
        {data.vegan && <Badge variant="secondary">Vegan!</Badge>}
      </CardFooter>
    </Card>
  );
};

export const RecipeCardSkeleton = () => (
  <Card className="flex flex-col justify-between">
    <CardHeader className="flex-row gap-4 items-center">
      <Skeleton className="w-12 h-12 rounded-full" />
      <Skeleton className="h-6 flex-grow" />
    </CardHeader>
    <CardContent>
      <Skeleton className="h-4 flex-grow mt-4" />
      <Skeleton className="h-4 flex-grow mt-4" />
      <Skeleton className="h-4 w-1/2 mt-4" />
    </CardContent>
    <CardFooter>
      <Skeleton className="h-10 w-28" />
    </CardFooter>
  </Card>
);

export default RecipeCard;
