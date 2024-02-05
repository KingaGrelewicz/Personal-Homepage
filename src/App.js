import { Globalstyle } from "./GlobalStyle";
import Container from "./components/Container";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Portfolio } from "./components/Portfolio";
import { Section } from "./components/Section";
import Skills from "./components/Section/Skills";
import WantToLearn from "./components/Section/WantToLearn";
import Tools from "./image/tools.png"
import Rocket from "./image/rocket.png"

function App() {
  return (
    <Container>
      <Globalstyle />
      <Header />
      <Section
        title="My skillset includes"
        img={Tools}
        content={<Skills />}
      />
      <Section
        title="What I want to learn next"
        img={Rocket}
        content={<WantToLearn />}
      />
      <Portfolio />
      <Footer />
    </Container>
  );
}

export default App;
