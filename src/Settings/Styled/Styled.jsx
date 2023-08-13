import GoogleImg from "../assets/images/Google.png";
import { NavLink } from "react-router-dom";
import { createGlobalStyle, styled } from "styled-components";
import Korzina from "../assets/images/Korzina.png"
export const GlobalStyle = createGlobalStyle`
    ::-webkit-scrollbar{
        display: none;
    }
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
    .link{
        font-size: 17px;
        color: grey;
        text-decoration: none;
    }
    .link__active{
        color: #2F3035;
        font-size: 17px;
        text-decoration: none;
    }
    .link__default{
        color: black;
        font-size: 17px;
        text-decoration: none;
        padding-bottom: 0.5rem;
        border-bottom: 2px solid transparent;
        font-weight: 400;
    }
    .link_default__active{
        font-weight: 400;
        color: black;
        font-size: 17px;
        text-decoration: none;
        padding-bottom: 0.5rem;
        border-bottom: 2px solid #1C62CD;
    }
    .x{
        position: absolute;
        top: 0;
        right: 0;
        padding: 0rem 0.5rem;
        background: crimson;
        color: #fff;
        font-size: 18px;
    }
    .x:active{
        background: #fff;
        color: #000;
    }
    .x:not(:active){
        transition: 0.5s ease;
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
export const GoogleBtn = styled.button.attrs({
        className: "btn__google"
    })`
        padding: 0.5rem 2rem ;
        background: #fff;
        border: 1px solid #00000026;
        font-size: 16px;
        padding-left:0.8rem;
        letter-spacing:1px;
        background-repeat: no-repeat;
        background-position: calc(100%);
        background-size: 20px;
    `
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
export const KorzinaBtn = styled.button`
    padding: 1.3rem;
    background: #1C62CD;
    color: #fff;
    border-radius: 10px 0px 0px 0px;
    background-size: 30px;
    background-position: center;
    background-repeat: no-repeat;
    position: absolute;
    bottom: 0;
    right: 0;
`
export const HeIsBtn = styled.button`
    padding: 0.5rem 1rem;
    color: black;
    font-size: 1.2rem;
    &:hover{
        text-decoration: underline;
    }
`
export const DalsheBtn = styled.button.attrs({
    type: "button"
})`
    padding: 0.5rem 1rem;
    background: #fff;
    color: #000;
    letter-spacing: 1px;
    font-size: 24px;
    word-spacing: 5px;
`