import _ from "lodash";
import { useSelector } from "react-redux";
import { ProjectDescription, ProjectTile, ProjectTileElement, ProjectTileHeader, ProjectTileLink, ProjectTileLinks, ProjectWrapper } from "./styled";
import { selectReposState } from "./reposSlice";

const ToDoList = ({ demo, code, description }) => {
  const repos = useSelector(selectReposState);

  return (
    <ProjectWrapper>
      {repos.map((repo) => (
        <ProjectTile key={repo.id}>
          <ProjectTileHeader>{_.startCase(repo.name.toLowerCase())}</ProjectTileHeader>
          <ProjectDescription>{description}</ProjectDescription>
          <ProjectTileLinks>
            <ProjectTileElement>
              Demo:
              {demo && (
                <ProjectTileLink
                  href={demo}
                  target="_blank"
                  rel="noopener noreferrer">
                  {demo}
                </ProjectTileLink>
              )}
            </ProjectTileElement>
            <ProjectTileElement>
              Code:
              <ProjectTileLink
                href={code}
                target="_blank"
                rel="noopener noreferrer"
              >
                {code}
              </ProjectTileLink>
            </ProjectTileElement>
          </ProjectTileLinks>
        </ProjectTile>
      ))}
    </ProjectWrapper>
  )
};

export default ToDoList;