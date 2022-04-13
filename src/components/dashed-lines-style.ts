import styled from "styled-components";

export const DashedLinesSquare = styled.div<{ readonly width: number; readonly height: number }>`
    position: absolute;
    left: 0;
    bottom: 0;
    width: ${props => props.width}px;
    height: ${props => props.height}px;
    border-right: 1px dashed red;
    border-top: 1px dashed red;
`;
