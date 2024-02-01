import styled from "styled-components";

export const FooterStyle = styled.footer`
    width: 111.11%;
    height: 60vh;
    background: black;
    margin:-67px;
    margin-top: 40px;
    color: white;
`

export const FooterHead = styled.div`
    position: absolute;
    width: 100%;
    height: 30px;
    background: #FFFCF0;
    /* background: black; */
    border-bottom-left-radius: 70px;
    border-bottom-right-radius: 70px;
    margin:-0.9px;
    /* top: 0; */
    z-index: 1000;
`

export const FooterBody = styled.div`
   margin: 50px;
   padding-top: 50px;
   small{
    color: grey;
    font-size: 10px;
   }

   hr{
    margin-top: 70px;
    height: 1px;
    background: #303030;
    border: none;
   }

`

export const LogoImg = styled.div`
    display: flex;
    flex-direction: column;
    padding-left: 20px;
    
    img{
        width: 120px;
        padding-top: 50px;
    }
    small{
        padding-top: 10px;
    }
`

export const Settings = styled.div`
    display: flex;
    flex-direction: column;
    small{
        padding-top: 10px;
    }
`
export const SocialIcons = styled.div`
    display: flex;
    /* gap: 20px; */
    align-items: center;
    justify-content: center;
    text-align: center;
    margin: auto;
    margin-top: 40px;
    color: grey;
    flex-direction: column;
    small{
    font-size: 10px;
    margin: 20px auto;
    /* display: flex; */
    /* flex-direction: column; */
   }
`

export const FooterIcon = styled.div`
    display: flex;
    gap: 30px;
    div{
        width: 25px;
        height: 25px;
        border-radius: 50%;
        border: 1px solid grey;
        /* align-items: center;
        justify-content: center;
        text-align: center; */
    }
`
export const FtIcon = styled.p`
    align-items: center;
    justify-content: center;
    text-align: center;
    margin-top: 2px;
`



