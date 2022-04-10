import styled from "styled-components";
import { CHART_SIZE } from "../constants";

export const GraphWrapper = styled.div`
    width: ${CHART_SIZE}px;
    aspect-ratio: 1;
    display: grid;
    grid-template-columns: auto auto;
    justify-content: center;
    align-content: center;
    position: relative;
    aspect-ratio: 1;
    margin: 0 0 20px;
    user-select: none;
`;

export const LeftTitle = styled.div`
    position: absolute;
    left: -15px;
    bottom: 10px;
    transform-origin: left;
    transform: rotate(-90deg);
`;

export const BottomTitle = styled.div`
    position: absolute;
    left: 10px;
    bottom: -20px;
`;
