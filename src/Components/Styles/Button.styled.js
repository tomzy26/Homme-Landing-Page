import styled from "styled-components"

export const ButtonSign = styled.button`
    padding: 10px 20px;
    background: ${(props) => (props.variant === "text"?  "none" : "#FFC701")};
    color: #000;
    border: 0px;
    border-radius: 5px;
    font-weight: bold;
`;