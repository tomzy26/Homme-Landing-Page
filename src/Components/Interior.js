import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { Icons, SectionHeading, Icon } from './Styles/Design.styled';
import { InteriorStyle, TopHead, VerticalText, Vr, InteriorImage } from './Styles/Interior.styled';
import { Flex } from "./Styles/Flex.styled"
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

// Component
const Interior = () => {

  return (
    <InteriorStyle>
      <TopHead>
        <SectionHeading>
          <h1 style={{ textAlign: 'left' }}>INTUITIVE INTERIOR</h1>
          <p style={{ textAlign: 'left' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu scelerisque accumsan, <br/> a vestibulum eget velit.</p>
        </SectionHeading>
        <Icons>
        <Icon><FontAwesomeIcon icon={faArrowLeft} /></Icon>
        <Icon><FontAwesomeIcon icon={faArrowRight} /></Icon>
        </Icons>
      </TopHead>
      <Flex>
      <VerticalText>
          <h2>AESTHETIC OFFICE</h2>
          <small>Lorem ipsum dolor sit amet, consectetur.</ small>
          <Vr></Vr>
          <p>Conference Room</p>
          <small>8 x 16 Feet</small>
      </VerticalText>
      <OwlCarousel className='owl-theme' items={1} loop nav={false} dots={false} style={{marginRight: "20px"}}>
      <InteriorImage>
        <img src="./Resources/interior101.jpg" alt='int1' />
      </InteriorImage>
      <InteriorImage>
        <img src="./Resources/interior2.png" alt='int2'/>
      </InteriorImage>
        </OwlCarousel>
      </Flex>
    </InteriorStyle>
  );
};

export default Interior;