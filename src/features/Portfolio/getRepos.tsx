import axios from "axios";
import { Repo } from "../../types/types";

export const getRepos = async (): Promise<Repo[]> => {
  const response = await axios.get<Repo[]>(
    "https://api.github.com/users/KingaGrelewicz/repos"
  );
  return response.data;
};
