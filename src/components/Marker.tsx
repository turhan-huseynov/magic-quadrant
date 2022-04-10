import { useRef, useState } from "react";
import { GRAPH_MIN, GRAPH_MAX } from "../constants";
import Tooltip from "./Tooltip";
import { Coord, Label } from "./marker-style";

function Marker(props: any) {
    const coordRef = useRef<HTMLDivElement>(null);
    const [hover, setHover] = useState(false);
    let offsetX = 0;
    let offsetY = 0;

    const handleDrag = (e: any) => {
        e.stopPropagation();
        // both coords came as 0 at the end, skip it
        if (coordRef.current === null) return;
        if (e.pageX === 0 && e.pageY === 0) return;
        let x = e.pageX - offsetX,
            y = e.pageY - offsetY;
        props.handleCoordinateUpdate(props.index, x, y);
        coordRef.current.style.setProperty("bottom", (props.defaultBottom - y) / 4 + "%");
        coordRef.current.style.setProperty("left", (x - props.defaultLeft) / 4 + "%");
    };
    const dragStartHandler = (e: any) => {
        e.dataTransfer.effectAllowed = "copyMove";
        e.stopPropagation();
        props.setIsDragging(true);
        offsetX = e.pageX - e.nativeEvent.offsetX;
        offsetY = e.pageY - e.nativeEvent.offsetY;
        props.setSelected(props.index);
        e.dataTransfer.setDragImage(new Image(), 0, 0);
    };
    const dragEndHandler = (e: any) => {
        e.stopPropagation();
        props.setIsDragging(false);
        offsetX = e.pageX - e.nativeEvent.offsetX;
        offsetY = e.pageY - e.nativeEvent.offsetY;
        props.reRender();
    };
    const handleClick = (e: any) => {
        e.stopPropagation();
        props.setSelected(props.index);
    };

    return (
        <Coord
            ref={coordRef}
            x={Math.max(Math.min(props.rowData.vision, GRAPH_MAX), GRAPH_MIN)}
            y={Math.max(Math.min(props.rowData.ability, GRAPH_MAX), GRAPH_MIN)}
            isFocussed={props.isFocussed}
            onClick={handleClick}
            onMouseOver={() => setHover(true)}
            onMouseOut={() => setHover(false)}
            draggable
            onDragStart={dragStartHandler}
            onDragEnd={dragEndHandler}
            onDrag={handleDrag}
        >
            <Tooltip shouldShow={hover && !props.isDragging}>
                Vision: {props.rowData.vision}
                <br />
                Ability: {props.rowData.ability}
            </Tooltip>
            <Label x={props.rowData.vision} y={props.rowData.ability} onDrag={(e: any) => e.preventDefault(e)}>
                {props.rowData.label}
            </Label>
        </Coord>
    );
}

export default Marker;
