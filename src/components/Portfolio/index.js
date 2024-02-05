import {
  PorftolioLoading,
  PortfolioHeader,
  PortfolioIcone,
  PortfolioProjectDescription,
  PortfolioSubheader,
  PortfolioTile,
  PortfolioTileHeader,
  PortfolioTileLink,
  PortfolioTileLinks,
  PortfolioWrapper
} from "./styled";
import { useRepositoriumData } from "./useRepositoriumData";

export const Portfolio = () => {
  const { status, repositories } = useRepositoriumData();

  return (
    <>
      <PortfolioIcone />
      <PortfolioHeader>Portfolio</PortfolioHeader>
      <PortfolioSubheader>My recent projects</PortfolioSubheader>

      {status === "loading" && <PorftolioLoading>Please wait, projects are being loaded...</PorftolioLoading>}
      {status === "error" && <p>Ooops! Something went wrong... </p>}

      {status === "success" && (
        <PortfolioWrapper>
          {repositories.map((repo) => (
            <PortfolioTile key={repo.id}>
              <PortfolioTileHeader>{repo.name}</PortfolioTileHeader>
              <PortfolioProjectDescription>{repo.description}</PortfolioProjectDescription>
              <PortfolioTileLinks>Demo:
                {/* {repo.homepage && ( */}
                  <PortfolioTileLink href={repo.homepage} target="_blank" rel="noopener noreferrer">
                {/* )} */}{repo.html_url}
                </PortfolioTileLink>
              </PortfolioTileLinks>
              <PortfolioTileLinks>Code:
                <PortfolioTileLink href={repo.html_url} target="_blank" rel="noopener noreferrer">
                  {repo.html_url}
                </PortfolioTileLink>
              </PortfolioTileLinks>
            </PortfolioTile>
          ))}
        </PortfolioWrapper>
      )}
    </>
  );
};