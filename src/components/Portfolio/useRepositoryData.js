import axios from 'axios';
import { useEffect, useState } from 'react';

const apiAddress = "https://api.github.com/users/KingaGrelewicz/repos";

export const useRepositoryData = () => {
    const [repoData, setRepoData] = useState({
        status: "loading",
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                await new Promise((resolve) => setTimeout(resolve, 1000));
                const response = await axios.get(apiAddress, {
                    params: {
                        sort: "updated",
                        direction: "desc",
                    },
                });

                setRepoData({
                    status: "success",
                    repositories: response.data,
                });

            } catch (error) {
                setRepoData({
                    status: "error",
                    repositories: [],
                });
            }
        }
        fetchData();
    }, []);

    return {
        ...repoData,
    }
}