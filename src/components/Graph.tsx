import Quadrant from "./Quadrant";
import Markers from "./Markers";
import DashedLines from "./DashedLines";
import { useLayoutEffect, useRef, useState } from "react";
import { GraphWrapper, LeftTitle, BottomTitle } from "./graph-style";

function Graph(props: any) {
    const graphRef = useRef<HTMLDivElement>(null);
    const [defaultLeft, setDefaultLeft] = useState(0);
    const [defaultBottom, setDefaultBottom] = useState(0);
    const [selectedWH, setSelectedWH] = useState({ width: 0, height: 0 });

    useLayoutEffect(() => {
        window.addEventListener("resize", setDefaultOffsets);
        setDefaultOffsets();
    }, []);

    const setDefaultOffsets = () => {
        const boundingRect = graphRef?.current?.getBoundingClientRect();
        setDefaultLeft(boundingRect?.left || 0);
        setDefaultBottom(boundingRect?.bottom || 0);
    };

    return (
        <GraphWrapper ref={graphRef} onClick={props.setSelected}>
            {props.quadrantTitles?.map((title: string, i: number) => (
                <Quadrant key={i} title={title} index={i} />
            ))}
            <LeftTitle>{props.leftTitle} →</LeftTitle>
            <BottomTitle>{props.rightTitle} →</BottomTitle>
            <Markers defaultLeft={defaultLeft} defaultBottom={defaultBottom} setSelectedWH={setSelectedWH} {...props} />
            <DashedLines selectedWH={selectedWH}></DashedLines>
        </GraphWrapper>
    );
}

export default Graph;
