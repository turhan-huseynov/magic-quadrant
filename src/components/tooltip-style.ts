import styled from "styled-components";

export const CustomTooltip = styled.div<{ readonly shouldShow: boolean }>`
    position: absolute;
    left: 40px;
    display: ${(props) => (props.shouldShow ? "block" : "none")};
    border: 1px solid black;
    background: #808080b3;
    z-index: 2;
    opacity: 75%;
    border-radius: 4px;
    padding: 4px 8px;
    white-space: nowrap;
    font-weight: bold;
`;