import styled from "styled-components";

export const GraphWrapper = styled.div`
    width: 400px;
    height: 400px;
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
