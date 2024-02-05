import { Globalstyle } from "./GlobalStyle";
import Container from "./components/Container";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Portfolio } from "./components/Portfolio";
import { Section } from "./components/Section";
import Skills from "./components/Section/Skills";
import WantToLearn from "./components/Section/WantToLearn";

function App() {
  return (
    <Container>
      <Globalstyle />
      <Header />
      <Section
        title="My skillset includes"
        content={<Skills />}
      />
      <Section
        title="What I want to learn next"
        content={<WantToLearn />}
      />
      <Portfolio />
      <Footer />
    </Container>
  );
}

export default App;
