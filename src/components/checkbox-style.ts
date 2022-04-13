import styled from "styled-components";

export const Checkbox = styled.input.attrs((props) => ({ type: "checkbox", checked: props.checked }))`
    width: 20px;
`;
