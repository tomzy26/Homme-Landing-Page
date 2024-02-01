import React, { useState } from 'react';
import { Container, ImageContainer, ToggleIcon, ToggleIcon2, Image, TextContainer, Text, Icons, Icon, SectionHeading } from './Styles/Design.styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
// import OwlCarousel from 'react-owl-carousel';
// import 'owl.carousel/dist/assets/owl.carousel.css';
// import 'owl.carousel/dist/assets/owl.theme.default.css';


// {/* <OwlCarousel className='owl-theme' loop margin={10} nav></OwlCarousel> */}

// Component
  const Design = () => {
  const [selectedImage, setSelectedImage] = useState('residence'); // 'residence' or 'corporate'
  const [selectedImage2, setSelectedImage2] = useState('corporate'); // 'residence' or 'corporate'

  const toggleImage = () => {
    setSelectedImage(prev => prev === 'residence' ? 'corporate' : 'residence');
  };

  const toggleImage2 = () => {
    setSelectedImage2(prev => prev === 'corporate' ? 'residence' : 'corporate');
  };

  

  return (
    <>
      <SectionHeading style={{ marginTop: '60px'}}>
        <h1>EXPLORE DESIGNS</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu scelerisque <br/>accumsan, a      vestibulum eget velit.</p>
      </SectionHeading>
    <Container>
      <ImageContainer>
        <Icons>
        <ToggleIcon onClick={toggleImage}><Icon><FontAwesomeIcon icon={faChevronLeft} /></Icon></ToggleIcon>
        <ToggleIcon2 onClick={toggleImage}><Icon><FontAwesomeIcon icon={faChevronRight} /></Icon></ToggleIcon2>
        </Icons>
        <Image src={selectedImage === 'residence' ? './Resources/residential.png' : './Resources/corporate.png'} alt="Residence or Corporate" />
        <TextContainer>
          <Text>Residence space</Text>
        </TextContainer>
      </ImageContainer>

      <ImageContainer>
        <Icons>
        <ToggleIcon onClick={toggleImage2}><Icon><FontAwesomeIcon icon={faChevronLeft} /></Icon></ToggleIcon>
        <ToggleIcon2 onClick={toggleImage2}><Icon><FontAwesomeIcon icon={faChevronRight} /></Icon></ToggleIcon2>
        </Icons>
        <Image src={selectedImage2 === 'corporate' ? './Resources/corporate.png' : './Resources/residential.png'} alt="Residence or Corporate" />
        <TextContainer>
          <Text>Corporate space</Text>
        </TextContainer>
      </ImageContainer>
    </Container>
    </>
  );
};

export default Design;
