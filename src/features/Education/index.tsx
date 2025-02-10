import {
  EducationDate,
  EducationDetails,
  EducationTitle,
  EducationWrapper,
  EducationTitleWrapper,
  UniversityName,
  EducationIcon,
} from "./styled";

const Education = () => {
  return (
    <>
      <EducationTitleWrapper>
        <EducationTitle>Education</EducationTitle>
        <EducationIcon />
      </EducationTitleWrapper>
      <EducationWrapper>
        <UniversityName>WSB Merito University, Wrocław</UniversityName>
        <EducationDate>10/2016 – 01/2020 </EducationDate>
        <EducationDetails>
          Engineer's degree, Logistics <br />
          Specialization: Logistics process engineering manager{" "}
        </EducationDetails>
      </EducationWrapper>
    </>
  );
};

export default Education;
