import styled from "styled-components";


export const StyledHeader = styled.header`
    background-color: #FFFCF0;
    padding: 27px 0;
    width: 100%;
    /* position: fixed; */
    /* z-index: 100; */
    margin-bottom: 100px;
`;

export const Nav = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 40px;

    @media(max-width:768px){
        flex-direction: column;
        margin-bottom: 40px;
    }
`;

export const Menu = styled.div`
    li{
        display: inline;
        padding: 0px 15px;
    }

    a{
        color: #000;
        text-transform: capitalize;
    }
`;

export const Image = styled.img`
    margin-left: 50px;
    width: 600.49px;
    height: 600.44px;
    left: 708.15px;
    /* top: -14px; */
    padding-left: 60px;
    
    @media(max-width:768px){
        
    }
    
`;

export const Logo = styled.img`
    width: 113px;
    height: 30px;
`;

export const Dream = styled.div`
    width: 462px;
    height: 100px;
    /* font-family: 'Sora'; */
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 50px;
    text-transform: uppercase;
    color: #000000;
`;

export const Hero = styled.div`
    margin-top: -220px;
    align-items: flex-start;
    
`;

export const Modern = styled.div`
    -webkit-text-stroke: 1px #00000080;
    color: transparent;
    font-family: "Sora-Bold", Helvetica;
    font-size: 140px;
    font-weight: 700;
    letter-spacing: 0;
    line-height: normal;
    margin-left: -40px;
    position: relative;
    width: fit-content;
    white-space: nowrap;
`;

export const StarImage = styled.img`
    height: 110.05px;
    width: auto;
    position: relative;
    // width: 70.33px;
    margin: 0 10px;
    padding: 0 20px;
    // margin-left: 2px;
    margin-right: 40px;
`;

export const Scroll = styled.div`
    /* display: flex; */
    margin-top: -290px;
    /* animation: circular-scroll 20s linear infinite; */

    @keyframes circular-scroll {
  0% {
    transform: translateX(100%); /* Start from right */
  }
  100% {
    transform: translateX(-100%); /* End at left */
  }
}
    /* flex-direction: column; */
    padding: 10px 10px;
`;
