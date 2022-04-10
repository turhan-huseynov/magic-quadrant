import { QuadrantWrapper, Label } from "./quadrant-style";

function Quadrant(props: any) {
    const isTop = props.index === 0 || props.index === 1;
    const isRight = props.index === 1 || props.index === 3;
    const isBottom = props.index === 2 || props.index === 3;
    const isLeft = props.index === 0 || props.index === 2;
    const borderRadius = `
    ${props.index === 0 ? "6px" : 0} 
    ${props.index === 1 ? "6px" : 0} 
    ${props.index === 3 ? "6px" : 0} 
    ${props.index === 2 ? "6px" : 0}`;

    return (
        <QuadrantWrapper
            isTop={isTop}
            isRight={isRight}
            isBottom={isBottom}
            isLeft={isLeft}
            borderRadius={borderRadius}
            // onClick={props.setSelected}
        >
            <Label index={props.index}>{props.title}</Label>
        </QuadrantWrapper>
    );
}

export default Quadrant;
