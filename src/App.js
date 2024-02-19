import { Globalstyle } from "./GlobalStyle";
import Container from "./components/Container";
import Footer from "./components/Footer";
import Header from "./components/Header/index.js";
import { Portfolio } from "./components/Portfolio";
import { Skills } from "./components/Skills/index.js";
import Tools from "./image/tools.png"
import Rocket from "./image/rocket.png"
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./theme.js";
import { SkillsList, professionalSkills, skillsToLearn } from "./components/SkillsList/index.js";
import useTheme from "./components/useTheme.js";


function App() {
  const { isLightTheme, toggleTheme } = useTheme();

  return (
    <ThemeProvider theme={isLightTheme ? lightTheme : darkTheme}>
      <Container>
        <Globalstyle />
        <Header
          toggleTheme={toggleTheme}
        />
        <Skills
          title="My skillset includes"
          img={Tools}
          skills={professionalSkills}
        >
          <SkillsList />
        </Skills>
        <Skills
          title="What I want to learn next"
          img={Rocket}
          skills={skillsToLearn}
        >
          <SkillsList />
        </Skills>
        <Portfolio />
        <Footer />
      </Container>
    </ThemeProvider >
  );
}

export default App;