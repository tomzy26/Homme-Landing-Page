import styled from "styled-components";

export const InteriorStyle = styled.div`
    margin-top: 60px;
`

export const TopHead = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 0 -10px;
`;

export const VerticalText = styled.div`
        display: inline-flex;
        flex-direction: column;
        width: 300px;
        /* border: 2px solid black; */
        text-align: center;
        padding:0 62px;
        height: 502px;
        margin-right: 20px;
        /* gap: 8px; */
        margin-left: -70px;
        text-align: left;
        z-index: 100;
        background-color: white;
    small{
        color: gray;
    };

    h2{
        margin-top: 0px;
        padding-top: 0px;
    };

    p{
        font-weight: bold;
        font-size: smaller;
    }
`;

export const Vr = styled.div`
    width: 1px;
    height: 250px;
    background-color: black;
    align-items: center;
    justify-content: center;
    margin-left: 40%;
    margin-top: 40px;
    margin-bottom: 40px;
`;

export const InteriorImage = styled.div`
    overflow-x: scroll hidden;
    display: flex;
    flex-direction: row;
    width: auto;
    height: 502px;
    /* gap: 100px; */
    /* margin-left: -550px; */
    margin-right: 20px;
`