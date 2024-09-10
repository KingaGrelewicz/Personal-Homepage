import React from "react";
import { useSelector } from "react-redux";
import { Globalstyle } from "./GlobalStyle";
import Container from "./common/Container";
import Footer from "./common/Footer";
import Header from "./common/Header";
import { Portfolio } from "./features/Portfolio";
import { Skills } from "./features/Skills";
import Tools from "./image/tools.png";
import Rocket from "./image/rocket.png";
import { ThemeProvider } from "styled-components";
import {
  SkillsList,
  professionalSkills,
  skillsToLearn,
} from "./features/SkillsList";
import { selectIsDarkTheme } from "./common/ThemeToggler/themeSlice";
import { darkTheme, lightTheme } from "./theme";

const App: React.FC = () => {
  const isDarkTheme = useSelector(selectIsDarkTheme);

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <Container>
        <Globalstyle />
        <Header />
        <Skills
          title="My skillset includes"
          img={Tools}
          skills={professionalSkills}
        >
          <SkillsList items={[]} />
        </Skills>
        <Skills
          title="What I want to learn next"
          img={Rocket}
          skills={skillsToLearn}
        >
          <SkillsList items={[]} />
        </Skills>
        <Portfolio />
        <Footer />
      </Container>
    </ThemeProvider>
  );
};

export default App;
