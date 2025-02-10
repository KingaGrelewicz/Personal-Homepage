import {
  AboutButton,
  AboutContent,
  AboutImage,
  AboutMailIcon,
  AboutName,
  AboutTitle,
  AboutWrapper,
} from "./styled";
import image from "../../image/kinga.jpg";
import { email } from "../../email";

const About: React.FC = () => {
  return (
    <>
    <AboutTitle>About Me</AboutTitle>
    <AboutWrapper>
      <AboutImage src={image} alt="" />
      <AboutContent>
        <AboutName>Kinga Grelewicz</AboutName>I am an{" "}
        <strong>open-minded person</strong> who approaches the exploration of
        new areas and personal development with enthusiasm, both in my private
        life and professionally.
        <br />I believe that a willingness to learn is the key to growth.
        <br />I embrace challenges and always strive to broaden my horizons to
        better understand a given task. I value both{" "}
        <strong>teamwork and independent projects</strong>, seeing them as
        opportunities to develop skills. I am convinced that diversity of
        perspectives enriches experiences and opens doors to new possibilities.
        <br />I also enjoy <strong>discussing solutions</strong> to challenges
        with a team, as each of us brings a different approach and experience,
        allowing for mutual learning and gaining insight into another person's
        point of view.
        <AboutButton href={`mailto:${email}`} title={email}>
          <AboutMailIcon />
          Hire me
        </AboutButton>
      </AboutContent>
    </AboutWrapper>
    </>
  );
};

export default About;
