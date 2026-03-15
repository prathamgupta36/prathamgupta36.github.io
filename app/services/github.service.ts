import axios from "axios";

async function getStarsByRepository(repository: string) {
  const response = await axios.get<{ stargazers_count?: number }>(
    `https://api.github.com/repos/${repository}`,
    {
    headers: {
      Accept: "application/vnd.github+json",
      "X-GitHub-Api-Version": "2022-11-28",
    },
    },
  );

  if (typeof response.data.stargazers_count !== "number") {
    throw new Error(`Missing stargazers_count for ${repository}`);
  }

  return response.data.stargazers_count;
}

export default {
  getStarsByRepository,
};
