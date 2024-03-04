export const getRepos = async () => {
    const response = await fetch("https://api.github.com/users/KingaGrelewicz/repos");

    if(!response.ok) {
        new Error(response.statusText);
    
    }
    return await response.json();
}