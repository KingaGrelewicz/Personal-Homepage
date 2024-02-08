import { Globalstyle } from "./GlobalStyle";
import Container from "./components/Container";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Portfolio } from "./components/Portfolio";
import { Skills, professionalSkills, skillsToLearn } from "./components/Skills";
import Tools from "./image/tools.png"
import Rocket from "./image/rocket.png"

function App() {
  return (
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
  );
}

export default App;
