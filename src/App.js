import Header from "./Components/Header";
import { Container } from "./Components/Styles/Container.styled";
import GlobalStyle from "./Components/Styles/Global";
import Design from "./Components/Design";
import Interior from "./Components/Interior";
import CaseStudy from "./Components/CaseStudy";
import Clients from "./Components/Clients";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Container>
        <Design />
        <Interior />
        <CaseStudy />
        <Clients />
        <Footer />
      </Container>
    </>
  );
}

export default App;
