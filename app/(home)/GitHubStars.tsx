import githubService from "@/services/github.service";
import { HiStar } from "react-icons/hi";

type GitHubStarsProps = {
  githubRepository: string;
};

export default async function GitHubStars({
  githubRepository,
}: GitHubStarsProps) {
  const stars = await githubService
    .getStarsByRepository(githubRepository)
    .catch(() => undefined);

  if (typeof stars !== "number") {
    return <div className="h-[24px]"></div>;
  }

  return (
    <div className="flex justify-end">
      <p className="flex items-center">
        <HiStar />
        {" " + stars}
      </p>
    </div>
  );
}
