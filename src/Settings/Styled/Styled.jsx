import { createGlobalStyle, styled } from "styled-components";
export const GlobalStyle = createGlobalStyle`
    *::before, *::after, *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    .container{
        max-width: 1450px;
        margin: 0 auto;
        padding: 0 20px;
    }
    .error{
        color: crimson;
    }
    .border-transparent{
        border: 1px solid transparent;
        outline: 1px solid transparent;
    }
`;
export const Btn = styled.button`
    padding: ${({className}) => className === "kupit_btn" ? "0.5rem 1.5rem": "0.5rem" };
    background: #1C62CD;
    color: #fff;
    font-size: 17px;
    border: 1px solid transparent;
    outline: 1px solid transparent;
`

