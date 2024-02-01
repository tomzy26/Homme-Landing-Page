import { Flex } from "./Styles/Flex.styled";
import { FooterStyle, FooterHead, FooterBody, LogoImg, Settings, SocialIcons, FooterIcon, FtIcon } from "./Styles/Footer.styled";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagram, faXTwitter, faYoutube,  } from '@fortawesome/free-brands-svg-icons';




const Footer = () => {

    return (
      <FooterStyle>
        <FooterHead></FooterHead>
        <FooterBody>
          <Flex>
            <div>
                <LogoImg>
                <img src="./Resources/footerlogo.png" alt="ftlogo"/>
                <small>Beautiful design is welcoming</small>
                </LogoImg>
            </div>
            <div>
              <Flex>
                <Settings>
                  <p>Services</p>
                  <small>Space Redesign</small>
                  <small>Product Purchase</small>
                </Settings>
                <Settings>
                  <p>Showcase</p>
                  <small>Residential Design</small>
                  <small>Corporate Design</small>
                </Settings>
                <Settings>
                  <p>Website</p>
                  <small>Privacy Policy</small>
                  <small>Terms & Conditions</small>
                </Settings>
                <Settings>
                  <p>Company</p>
                  <small>Contact Us</small>
                  <small>Careers</small>
                </Settings>
              </Flex>
            </div>
          </Flex>
          <hr />
          
          <SocialIcons>
            <FooterIcon>
              <div><FtIcon><FontAwesomeIcon icon={faInstagram} /></FtIcon></div>
              <div><FtIcon><FontAwesomeIcon icon={faXTwitter} /></FtIcon></div>
              <div><FtIcon><FontAwesomeIcon icon={faFacebookF} /></FtIcon></div>
              <div><FtIcon><FontAwesomeIcon icon={faYoutube} /></FtIcon></div>
            </FooterIcon>
            <small>Copyrights. All rights reserved.</small>
          </SocialIcons>
        </FooterBody>
        
      </FooterStyle>
    );
  };
  
  export default Footer;