import { Container, SectionHeading } from './Styles/Design.styled';
import { CaseText, CaseStyle } from "./Styles/CaseStudy.styled"


  const CaseStudy = () => {

  return (
    <CaseStyle>
      <SectionHeading style={{ marginTop: '60px'}}>
        <h1>CASE STUDIES</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu scelerisque <br/>accumsan, a      vestibulum eget velit.</p>
      </SectionHeading>
    <Container>
        <img src='./Resources/casestudy.png' alt='caseimg'/>
    </Container>
          <CaseText>
            <p>Lounge Re-design</p>
            <small>Learn More</small>
          </CaseText>
    </CaseStyle>
  );
};

export default CaseStudy;

