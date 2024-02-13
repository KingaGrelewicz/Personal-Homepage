import { Globalstyle } from "./GlobalStyle";
import Container from "./components/Container";
import Footer from "./components/Footer";
import Header from "./components/Header/index.js";
import { Portfolio } from "./components/Portfolio";
import { Skills, professionalSkills, skillsToLearn } from "./components/Skills/index.js";
import Tools from "./image/tools.png"
import Rocket from "./image/rocket.png"
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./theme.js";
import { useState } from "react";


function App() {
  const [theme, setTheme] = useState("light");
  const isLightTheme = theme === "light";

  const toggleTheme = () => {
    setTheme(isLightTheme ? "dark" : "light");
  };

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