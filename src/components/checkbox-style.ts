import styled from "styled-components";

export const Checkbox = styled.input.attrs<{ readonly isChecked: boolean }>((props: any) => ({
    type: "checkbox",
    checked: props.isChecked,
}))`
    margin: auto;
`;
