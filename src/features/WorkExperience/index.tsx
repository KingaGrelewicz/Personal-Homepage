import { Experience } from "../../types/types";
import {
  CompanyName,
  ExperienceWrapper,
  JobDuration,
  JobPosition,
  JobResponsibilities,
} from "./styled";

const WorkExperience: React.FC<Experience> = ({
  company,
  position,
  duration,
  responsibilities,
}) => {
  return (
    <ExperienceWrapper>
      <CompanyName>{company}</CompanyName>
      <JobPosition>{position}</JobPosition>
      <JobDuration>{duration}</JobDuration>
      <JobResponsibilities>
        Responsibilities:
        <ul>
          {responsibilities.map((task, id) => (
            <li key={id}>{task}</li>
          ))}
        </ul>
      </JobResponsibilities>
    </ExperienceWrapper>
  );
};

export default WorkExperience;
