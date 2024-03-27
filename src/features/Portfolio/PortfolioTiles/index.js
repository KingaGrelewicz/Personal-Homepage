import _ from "lodash";
import { 
    TileDescription, 
    TileElement, 
    TileHeader, 
    TileLink, 
    TileLinks, 
    TileRepo, 
    TileWrapper 
} from "./styled";
import { useSelector } from "react-redux";
import { selectReposState } from "../reposSlice";

const PortfolioTiles = () => {
    const repos = useSelector(selectReposState);
    return (
        <TileWrapper>
          {repos.map((repo) => (
            <TileRepo key={repo.id}>
              <TileHeader>{_.startCase(repo.name.toLowerCase())}</TileHeader>
              <TileDescription>{repo.description}</TileDescription>
              <TileLinks>
                <TileElement>
                  Demo:
                  {repo.homepage && (
                    <TileLink
                      href={repo.homepage}
                      target="_blank"
                      rel="noopener noreferrer">
                      {repo.homepage}
                    </TileLink>
                  )}
                </TileElement>
                <TileElement>
                  Code:
                  <TileLink
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {repo.html_url}
                  </TileLink>
                </TileElement>
              </TileLinks>
            </TileRepo>
          ))}
        </TileWrapper>
    );
};

export default PortfolioTiles;