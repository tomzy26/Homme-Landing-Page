import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body{
        margin: 0px;
        padding: 0;
        background: #FFFCF0;
        font-family: sora;
        overflow-x: hidden;
    }

    h1{
        font-size: 48px;
    }

    a{
        text-decoration: none;
    }

`;

// export const Container = styled.div`
//     width: 85%;
//     max-width:1200px;
//     margin: auto;
//     position: relative;
// `;

export default GlobalStyle;
