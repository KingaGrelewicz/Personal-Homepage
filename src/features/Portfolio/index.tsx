import { FrontendTitle, PortfolioHeader, PortfolioIcon, PortfolioSubheader } from "./styled";
import { useEffect } from "react";
import { selectErrorState, selectLoadingState, setRepos } from "./reposSlice";
import Loading from "../Loading";
import ErrorComponent from "../ErrorComponent";
import PortfolioTiles from "./PortfolioTiles";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { FrontendSkills } from "../FrontendSkills";
import {
  professionalSkills,
  FrontendSkillsList,
  skillsToLearn,
} from "../FrontendSkillsList";
import Tools from "../../image/tools.png";
import Rocket from "../../image/rocket.png";

export const Portfolio = () => {
  const dispatch = useAppDispatch();
  const loading = useAppSelector(selectLoadingState);
  const error = useAppSelector(selectErrorState);

  useEffect(() => {
    dispatch(setRepos());
  }, [dispatch]);

  return (
    <>
    <FrontendTitle>Frontend</FrontendTitle>
      <FrontendSkills
        title="My skillset includes"
        img={Tools}
        skills={professionalSkills}
      >
        <FrontendSkillsList items={[]} />
      </FrontendSkills>
      <FrontendSkills
        title="What I want to learn next"
        img={Rocket}
        skills={skillsToLearn}
      >
        <FrontendSkillsList items={[]} />
      </FrontendSkills>
      <PortfolioIcon />
      <PortfolioHeader>Portfolio</PortfolioHeader>
      <PortfolioSubheader>My recent projects</PortfolioSubheader>

      {loading && <Loading />}

      {error && <ErrorComponent />}

      {!loading && !error && <PortfolioTiles />}
    </>
  );
};
