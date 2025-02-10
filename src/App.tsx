import { useSelector } from "react-redux";
import { HashRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Globalstyle } from "./GlobalStyle";
import Container from "./common/Container";
import Footer from "./common/Footer";
import Header from "./common/Header";
import { Portfolio } from "./features/Portfolio";
import { selectIsDarkTheme } from "./common/ThemeToggler/themeSlice";
import { darkTheme, lightTheme } from "./theme";
import MenuNav from "./common/MenuNav";
import About from "./features/About";
import Education from "./features/Education";
import WorkExperienceList from "./features/WorkExperienceList";
import { workExperienceData } from "./features/WorkExperienceList/workExperienceData";
import Skills from "./features/Skills";

const App: React.FC = () => {
  const isDarkTheme = useSelector(selectIsDarkTheme);

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <HashRouter>
        <Container>
          <Globalstyle />
          <Header />
          <MenuNav />
          <Routes>
            <Route path="/" element={<About />}></Route>
            <Route
              path="/experience"
              element={<WorkExperienceList jobs={workExperienceData} />}
            ></Route>
            <Route path="/skills" element={<Skills />}></Route>
            <Route path="/education" element={<Education />}></Route>
            <Route path="/frontend" element={<Portfolio />}></Route>
          </Routes>
          <Footer />
        </Container>
      </HashRouter>
    </ThemeProvider>
  );
};

export default App;
