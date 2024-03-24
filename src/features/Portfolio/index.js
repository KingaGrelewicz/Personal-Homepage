import { useDispatch, useSelector } from "react-redux";
import {
  PortfolioHeader,
  PortfolioIcon,
  PortfolioSubheader,
} from "./styled";
import { useEffect } from "react";
import { selectReposState, setRepos } from "./reposSlice";
import PersonalHomepage from "./PersonalHomepage";
import CurrencyConverter from "./CurrencyConverter";
import Loading from "../Loading";
import Error from "../Error";
import ToDoList from "./ToDoList";

export const Portfolio = () => {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.repos.loading);
  const error = useSelector(state => state.repos.error);
  const repos = useSelector(selectReposState);

  useEffect(() => {
    dispatch(setRepos());
  }, [dispatch]);

  return (
    <>
      <PortfolioIcon />
      <PortfolioHeader>Portfolio</PortfolioHeader>
      <PortfolioSubheader>My recent projects</PortfolioSubheader>

      {loading && <Loading />}

      {error && <Error />}

      {!loading && !error && (
        <>
        <CurrencyConverter>
          {repos.map((repo) => (
            <div
              key={repo.id}
              title={repo.name}
              description={repo.description}
              demo={repo.homepage}
              code={repo.html_url}
            />
          ))}
        </CurrencyConverter>
        <ToDoList>
          {repos.map((repo) => (
            <ToDoList
              key={repo.id}
              title={repo.name}
              description={repo.description}
              demo={repo.homepage}
              code={repo.html_url}
            />
          ))}
        </ToDoList>
        <PersonalHomepage>
          {repos.map((repo) => (
            <PersonalHomepage
              key={repo.id}
              title={repo.name}
              description={repo.description}
              demo={repo.homepage}
              code={repo.html_url}
            />
          ))}
        </PersonalHomepage>
        </>
        
      )}
    </>
  );
};