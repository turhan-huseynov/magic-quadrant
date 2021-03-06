import styled from "styled-components";
import { CHART_SIZE } from "./constants";
import { DARK_GREY, LIGHT_GREY, WHITE } from "./colorCodes";

export const Logo = styled.img`
    position: absolute;
    top: 20px;
    left: calc(50%);
    transform: translateX(-50%);
    width: 60px;
    aspect-ratio: 1;
    z-index: 10;

    &:hover {
        animation: example 2s infinite;
        animation-fill-mode: forwards;
    }

    @keyframes example {
        50% {
            transform: rotate(120deg);
        }
    }

    @media (max-width: 950px) {
        right: 5px;
        left: auto;
        width: 30px;
    }
`;
export const AppWrapper = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #f4f4ff;
`;
export const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 8px;
    height: ${CHART_SIZE}px;
    width: 80vw;
    align-items: start;

    @media (max-width: 950px) {
        grid-template-columns: 1fr;
        height: auto;
    }
`;
export const Button = styled.button`
    position: absolute;
    bottom: 24px;
    right: 24px;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    border: 1px solid ${LIGHT_GREY};
    background: ${LIGHT_GREY};
    cursor: pointer;
    font-size: 30px;

    &:hover {
        background: ${DARK_GREY};
    }
    &:active {
        background: ${DARK_GREY};
        color: ${WHITE};
        border: 1px solid ${LIGHT_GREY};
    }
`;
