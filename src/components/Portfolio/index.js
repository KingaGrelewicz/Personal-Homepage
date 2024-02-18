import _ from "lodash";
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
import { useRepositoryData } from "./useRepositoryData";
import SpinnerIcon from "../../image/icon-spinner.png";
import DangerIcon from "../../image/Danger.png"

export const Portfolio = () => {
  const { status, repositories } = useRepositoryData();

  return (
    <>
      <PortfolioIcon />
      <PortfolioHeader>Portfolio</PortfolioHeader>
      <PortfolioSubheader>My recent projects</PortfolioSubheader>

      {status === "loading" &&
        <>
          <PorftolioLoading>Please wait, projects are being loaded...</PorftolioLoading>
          <PortfolioLoadingSpinner src={SpinnerIcon} alt="Spiner Icon" />
        </>
      }
      {status === "error" &&
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

      {status === "success" && (
        <PortfolioWrapper>
          {repositories.map((repo) => (
            <PortfolioTile key={repo.id}>
              <PortfolioTileHeader>{_.startCase(repo.name.toLowerCase())}</PortfolioTileHeader>
              <PortfolioProjectDescription>{repo.description}</PortfolioProjectDescription>
              <PortfolioTileLinks>
                <PortfolioTileElement>Demo:
                  {repo.homepage && (
                    <PortfolioTileLink href={repo.homepage} target="_blank" rel="noopener noreferrer">
                      {repo.homepage}
                    </PortfolioTileLink>
                  )}
                </PortfolioTileElement>
                <PortfolioTileElement>Code:
                  <PortfolioTileLink href={repo.html_url} target="_blank" rel="noopener noreferrer">
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