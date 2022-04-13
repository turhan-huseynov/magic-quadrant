import styled from "styled-components";
import { DARK_BLUE } from "../colorCodes";

export const Coord = styled.div<{ x: number; y: number; isFocussed: boolean; shouldDisable: boolean }>`
    position: absolute;
    left: ${(props) => props.x}%;
    bottom: ${(props) => props.y}%;
    width: 15px;
    height: 15px;
    transform: translate(-50%, 50%);
    background: ${(props) => (props.shouldDisable ? "gray" : props.isFocussed ? "darkred" : DARK_BLUE)};
    border-radius: 50%;
    z-index: 1;

    &:hover {
        filter: brightness(1.5);
        cursor: grab;
    }

    &:active {
        cursor: grabbing;
        cursor: -moz-grabbing;
        cursor: -webkit-grabbing;
    }
`;

export const Label = styled.div<{ x: number; y: number }>`
    position: relative;
    top: ${(props) => (props.y >= 20 ? "100%" : "auto")};
    bottom: ${(props) => (props.y < 20 ? "100%" : "auto")};
    left: ${(props) => (props.x <= 80 ? "100%" : "auto")};
    right: ${(props) => (props.x > 80 ? "100%" : "auto")};
    font-size: 13px;
    color: ${DARK_BLUE};
    font-family: sans-serif;
    width: 40px;
    pointer-events: none;
`;
