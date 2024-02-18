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
import { useEffect, useState } from "react";
import { getThemeFromLocalStorage, saveThemeInLocalStorage } from "./components/themeLocalStorage.js";


function App() {
  const [theme, setTheme] = useState(getThemeFromLocalStorage() || "light");
  const isLightTheme = theme === "light";

  const toggleTheme = () => {
    const newTheme = isLightTheme ? "dark" : "light";
    setTheme(newTheme);
    saveThemeInLocalStorage(newTheme);
  };

  useEffect(() => {
    const themeFromStorage = getThemeFromLocalStorage();
    if (themeFromStorage) {
      setTheme(themeFromStorage);
    }
  }, []);

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