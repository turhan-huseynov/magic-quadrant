import { DashedLinesSquare } from "./dashed-lines-style";

function DashedLines(props: any) {
    return <DashedLinesSquare width={props.selectedWH.width} height={props.selectedWH.height}></DashedLinesSquare>;
}

export default DashedLines;
