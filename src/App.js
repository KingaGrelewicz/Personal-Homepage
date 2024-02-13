import { Globalstyle } from "./GlobalStyle";
import Container from "./components/Container";
import Footer from "./components/Footer";
import Header from "./components/Header/index.js";
import { Portfolio } from "./components/Portfolio";
import { Skills, professionalSkills, skillsToLearn } from "./components/Skills/index.js";
import Tools from "./image/tools.png"
import Rocket from "./image/rocket.png"
import { ThemeProvider } from "./components/ThemeContext.js";

function App() {
  const {theme} = ThemeProvider;

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Globalstyle />
        <Header />
        <Skills
          title="My skillset includes"
          img={Tools}
          skills={professionalSkills}
        />
        <Skills
          title="What I want to learn next"
          img={Rocket}
          skills={skillsToLearn}
        />
        <Portfolio />
        <Footer />
      </Container>
    </ThemeProvider>
  );
}

export default App;