import axios from "axios";

export const getRepos = async () => {
    try {
      const response = await axios.get('https://api.github.com/users/KingaGrelewicz/repos');
      return response.data;
    } catch (error) {
      throw new Error(error.message);
    }
};
