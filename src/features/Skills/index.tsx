import HardSkills from "./HardSkills";
import { SkillsList } from "./skillsList";
import SoftSkills from "./SoftSkills";
import { SkillsTitle } from "./styled";

const Skills = () => {
  return (
    <>
      <SkillsTitle>Skills</SkillsTitle>
      <SoftSkills skills={SkillsList.softSkills} />
      <HardSkills skills={SkillsList.hardSkills} />
    </>
  );
};

export default Skills;
