import { ExperienceProps } from "../../types/types";
import WorkExperience from "../WorkExperience";
import { WorkExperienceTitle } from "./styled";

const WorkExperienceList: React.FC<ExperienceProps> = ({ jobs }) => {
  return (
    <>
      <WorkExperienceTitle>Work Experience</WorkExperienceTitle>
      <div>
        {jobs.map((job) => (
          <WorkExperience
            key={job.id}
            id={job.id}
            company={job.company}
            position={job.position}
            duration={job.duration}
            responsibilities={job.responsibilities}
          />
        ))}
      </div>
    </>
  );
};

export default WorkExperienceList;
