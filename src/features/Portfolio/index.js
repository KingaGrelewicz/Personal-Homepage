import { useDispatch, useSelector } from "react-redux";
import {
  PortfolioHeader,
  PortfolioIcon,
  PortfolioSubheader,
  PortfolioTile,
  PortfolioTileElement,
  PortfolioTileHeader,
  PortfolioTileLink,
  PortfolioTileLinks,
} from "./styled";
import { useEffect } from "react";
import { selectReposState, setRepos } from "./reposSlice";
import Loading from "../Loading";
import Error from "../Error";

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
        <PortfolioWrapper>
          {repos.map((repo) => (
            <PortfolioTile key={repo.id}>
              <PortfolioTileHeader>{_.startCase(repo.name.toLowerCase())}</PortfolioTileHeader>
              <PortfolioProjectDescription>{repo.description}</PortfolioProjectDescription>
              <PortfolioTileLinks>
                <PortfolioTileElement>
                  Demo:
                  {repo.homepage && (
                    <PortfolioTileLink
                      href={repo.homepage}
                      target="_blank"
                      rel="noopener noreferrer">
                      {repo.homepage}
                    </PortfolioTileLink>
                  )}
                </PortfolioTileElement>
                <PortfolioTileElement>
                  Code:
                  <PortfolioTileLink
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {repo.html_url}
                  </PortfolioTileLink>
                </PortfolioTileElement>
              </PortfolioTileLinks>
            </PortfolioTile>
          ))}
        </PortfolioWrapper>
      )}
    </>
  );
};