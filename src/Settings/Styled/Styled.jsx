import { NavLink } from "react-router-dom";
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
    transition: 0.5s ease ;
    &:hover{
        opacity: .6;
    }
`
const LabelVariant = {
    error: {
        color: "crimson"
    },
    default: {
        color: "black"
    }
}
export const Input = styled.input.attrs({
    className: "input__form"
})`
    padding: 0.5rem 1rem;
    border: ${({variant}) => LabelVariant[variant].color };
    &::placeholder{
        color: black;
    }
`
const LinkObject = {
    link_block : {
        display: "block"
    },
    link_default : {
        display: "inherit"
    }
}
export const Link = styled(NavLink).attrs({
    className: "link border-transparent"
})`
    color: #0091ff;
    display: ${({variant}) => LinkObject[variant].display};
    font-size: 1rem;
    margin: 1rem 0rem;
    text-decoration: none
`
export const LabelText = styled.label.attrs({
    className: "label__text"
})`
    font-size: 20px;
    color: ${({variant}) => LabelVariant[variant].color };
`