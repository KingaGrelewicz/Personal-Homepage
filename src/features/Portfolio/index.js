import _ from "lodash";
import { useDispatch, useSelector } from "react-redux";
import {
  PorftolioLoading,
  PortfolioButton,
  PortfolioHeader,
  PortfolioIcon,
  PortfolioLoadingSpinner,
  PortfolioProjectDescription,
  PortfolioSubheader,
  PortfolioTile,
  PortfolioTileElement,
  PortfolioTileHeader,
  PortfolioTileLink,
  PortfolioTileLinks,
  PortfolioWarning,
  PortfolioWarningImage,
  PortfolioWarningText,
  PortfolioWarningWrapper,
  PortfolioWrapper
} from "./styled";
import SpinnerIcon from "../../image/icon-spinner.png";
import DangerIcon from "../../image/Danger.png"
import { useEffect } from "react";
import { selectReposState, setRepos } from "./reposSlice";

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

      {loading &&
        <>
          <PorftolioLoading>Please wait, projects are being loaded...</PorftolioLoading>
          <PortfolioLoadingSpinner src={SpinnerIcon} alt="Spiner Icon" />
        </>
      }

      {error &&
        <PortfolioWarningWrapper>
          <PortfolioWarningImage src={DangerIcon} alt="Danger Icon" />
          <PortfolioWarning>Ooops! Something went wrong... </PortfolioWarning>
          <PortfolioWarningText>Sorry, failed to load Github projects.
            You can check them directly on Github.</PortfolioWarningText>
          <PortfolioButton
            href="https://github.com/KingaGrelewicz?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
          >
            Go to GitHub
          </PortfolioButton>
        </PortfolioWarningWrapper>
      }

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