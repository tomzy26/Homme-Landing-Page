import { SectionHeading } from './Styles/Design.styled';
import { ClientStyle, Planets, ClientImg, ClientFlex } from './Styles/Clients.styled';


  const Clients = () => {

  return (
    <ClientStyle>
      <SectionHeading style={{ marginTop: '60px'}}>
        <h1>CLIENTS</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu scelerisque <br/>accumsan, a      vestibulum eget velit.</p>
      </SectionHeading>
      <Planets>
      <ClientFlex>
        <ClientImg src='./Resources/Earth.png' alt='earth'/>
      </ClientFlex>
      <ClientFlex>
        <ClientImg src='./Resources/Treva.png' alt='earth'/>
      </ClientFlex>
      <ClientFlex>
        <ClientImg src='./Resources/Circle.png' alt='earth'/>
      </ClientFlex>
      <ClientFlex>
        <ClientImg src='./Resources/ALab.png' alt='earth'/>
      </ClientFlex>
      <ClientFlex>
        <ClientImg src='./Resources/Atica.png' alt='earth'/>
      </ClientFlex>
      <ClientFlex>
        <ClientImg src='./Resources/Nira.png' alt='earth'/>
      </ClientFlex>
      </Planets>
    
    </ClientStyle>
  );
};

export default Clients;

