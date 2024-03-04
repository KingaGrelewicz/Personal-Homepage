import { useSelector } from "react-redux";
import { Globalstyle } from "./GlobalStyle";
import Container from "./common/Container";
import Footer from "./common/Footer";
import Header from "./features/Header/index.js";
import { Portfolio } from "./features/Portfolio";
import { Skills } from "./features/Skills/index.js";
import Tools from "./image/tools.png"
import Rocket from "./image/rocket.png"
import { ThemeProvider } from "styled-components";
import { SkillsList, professionalSkills, skillsToLearn } from "./features/SkillsList/index.js";
import { selectTheme } from "./features/Toggler/themeSlice.js";


function App() {
  const theme = useSelector(selectTheme);

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Globalstyle />
        <Header

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