import axios from "axios";

export const getRepos = async () => {
      const response = await axios.get('https://api.github.com/users/KingaGrelewicz/repos');
      return response.data;
};
