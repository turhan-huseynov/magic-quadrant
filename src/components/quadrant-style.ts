import styled from "styled-components";

export const QuadrantWrapper = styled.div<{
    isTop: boolean;
    isRight: boolean;
    isBottom: boolean;
    isLeft: boolean;
    borderRadius: string;
}>`
    position: relative;
    min-width: 100px;
    width: 200px;
    aspect-ratio: 1;
    border: 1px solid #e3e4e7;
    background: white;

    border-top: ${(props) => (props.isTop ? "2px solid #696969" : "1px solid #e3e4e7")};
    border-right: ${(props) => (props.isRight ? "2px solid #696969" : "1px solid #e3e4e7")};
    border-bottom: ${(props) => (props.isBottom ? "2px solid #696969" : "1px solid #e3e4e7")};
    border-left: ${(props) => (props.isLeft ? "2px solid #696969" : "1px solid #e3e4e7")};

    border-radius: ${(props) => props.borderRadius};
`;

export const Label = styled.div<{ readonly index: number }>`
    position: absolute;
    padding: 2px 8px;
    left: 50%;
    transform: translate(-50%);
    top: ${(props) => (props.index < 2 ? "10px" : "auto")};
    bottom: ${(props) => (props.index >= 2 ? "10px" : "auto")};
    color: white;
    background: #adb9c3;
    border-radius: 6px;
    font-size: 13px;
    z-index: 1;
    opacity: 90%;
    font-family: sans_serif;

    &:hover {
        opacity: 50%;
    }
`;
