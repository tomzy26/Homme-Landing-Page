import styled from "styled-components";

export const Flex = styled.div`
    display: flex;
    align-items: center;
    padding-top: 10px;

    & > div,
    & > ul {
        flex: 1;
    }

    @media(max-width:768px){
        flex-direction: column;
        text-align: center;
    }
`