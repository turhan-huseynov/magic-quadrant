import styled from "styled-components";
import { CHART_SIZE } from "../constants";
import { DARK_GREY, LIGHT_GREY, LIGHT_BLUE, WHITE } from "../colorCodes";

export const QuadrantWrapper = styled.div<{
    isTop: boolean;
    isRight: boolean;
    isBottom: boolean;
    isLeft: boolean;
    borderRadius: string;
}>`
    position: relative;
    min-width: 100px;
    width: ${CHART_SIZE / 2}px;
    aspect-ratio: 1;
    border: 1px solid ${LIGHT_GREY};
    background: ${WHITE};

    border-top: ${(props) => (props.isTop ? `2px solid ${DARK_GREY}` : `1px solid ${LIGHT_GREY}`)};
    border-right: ${(props) => (props.isRight ? `2px solid ${DARK_GREY}` : `1px solid ${LIGHT_GREY}`)};
    border-bottom: ${(props) => (props.isBottom ? `2px solid ${DARK_GREY}` : `1px solid ${LIGHT_GREY}`)};
    border-left: ${(props) => (props.isLeft ? `2px solid ${DARK_GREY}` : `1px solid ${LIGHT_GREY}`)};

    border-radius: ${(props) => props.borderRadius};
`;

export const Label = styled.div<{ readonly index: number }>`
    position: absolute;
    padding: 2px 8px;
    left: 50%;
    transform: translate(-50%);
    top: ${(props) => (props.index < 2 ? "10px" : "auto")};
    bottom: ${(props) => (props.index >= 2 ? "10px" : "auto")};
    color: ${WHITE};
    background: ${LIGHT_BLUE};
    border-radius: 6px;
    font-size: 13px;
    z-index: 1;
    opacity: 90%;
    font-family: sans_serif;

    &:hover {
        opacity: 50%;
    }
`;
