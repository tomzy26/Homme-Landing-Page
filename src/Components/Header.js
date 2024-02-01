import { Container } from "./Styles/Container.styled"
import { Flex } from "./Styles/Flex.styled"
import { Menu, Nav, StyledHeader, Image, Logo, Dream, Hero, Modern, StarImage, Scroll } from "./Styles/Header.styled"
import Button from "./Button"
// import FeatherIcon from "feather-icons-react"
import Marquee from "react-fast-marquee"


export default function Header () {
  return (
    <StyledHeader>
        <Container>
        <Nav>
            <Logo src="./Resources/logo.png" alt="" />
            <Menu>
              <ul>
              <li>
                <a href="localhost:3000">Design</a>
              </li>
              <li>
                <a href="localhost:3000">Interiors</a>
              </li>
              <li>
                <a href="localhost:3000">Case Studies</a>
              </li>
              <li>
                <a href="localhost:3000">Clients</a>
              </li>
            </ul>
            </Menu>
            <div>
            <Button variant="text">Sign In</Button>
            <Button>Sign Up</Button>
            </div>

            {/* <FeatherIcon icon="menu"/> */}
          </Nav>
          <Flex>
            <div>
              <Hero>
              <Dream>DESIGN YOUR DREAM <br/>HOME</Dream>
              <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu scelerisque <br/>accumsan, a vestibulum eget velit.</p>
              <Button>Explore Gallery</Button>
              </Hero>
            </div>
            <div>
            <Image src="./Resources/hero-img.png" alt="hero" style={{ alignItems: 'flex-end' }}/>
            </div>
          </Flex>
            <Scroll>
            <Marquee>
              <Modern>MODERN DESIGN</Modern>
              <StarImage src="./Resources/Star.png" alt="star"/>
            </Marquee>
            </Scroll>
        </Container>
    </StyledHeader>
  )
}
