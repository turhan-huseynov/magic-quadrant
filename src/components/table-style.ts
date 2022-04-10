import styled from "styled-components";
import { GRAPH_MIN, GRAPH_MAX } from "../constants";

export const TableWrapper = styled.div`
    overflow: auto;
    height: 100%;
    min-height: 150px;
    max-height: 400px;
`;
export const Row = styled.div`
    display: grid;
    grid-template-columns: 3fr 1fr 1fr 1fr;
    gap: 4px;
    margin-bottom: 4px;
`;
export const ThWrapper = styled(Row)`
    position: sticky;
    top: 0;
`;
export const Th = styled.div`
    background: #adb9c3;
    color: white;
    text-align: center;
    border-radius: 6px;
    font-size: 12px;
    padding: 4px 0;
    font-family: sans-serif;
`;
export const Col = styled.input.attrs((props) => ({
    type: props.type || "text",
    min: GRAPH_MIN,
    max: GRAPH_MAX,
    maxlength: props.type === "number" ? "3" : "20",
    pattern: "[0-9]{3}",
}))`
    min-width: 70px;
    border-radius: 6px;
    border: 2px solid #e3e4e7;
    padding: 2px 4px;
    min-width: 45px;
`;
export const Button = styled.button`
    border: 1px solid #e3e4e7;
    border-radius: 6px;
    background: #e3e4e7;

    &:hover {
        background: #696969;
    }
    &:active {
        background: #696969;
        color: white;
        border: 1px solid #e3e4e7;
    }
`;
