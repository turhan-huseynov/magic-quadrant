import { useRef, useState } from "react";
import { GRAPH_MIN, GRAPH_MAX, CHART_SIZE } from "../constants";
import Tooltip from "./Tooltip";
import { Coord, Label } from "./marker-style";
import { clamp } from "../helpers";

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
        coordRef.current.style.setProperty("bottom", (props.defaultBottom - y) / (CHART_SIZE / 100) + "%");
        coordRef.current.style.setProperty("left", (x - props.defaultLeft) / (CHART_SIZE / 100) + "%");
        props.setSelectedWH({
            height: props.defaultBottom - y,
            width: x - props.defaultLeft,
        });
    };
    const dragStartHandler = (e: any) => {
        e.dataTransfer.effectAllowed = "copyMove";
        e.stopPropagation();
        props.setIsDragging(true);
        offsetX = e.pageX - e.nativeEvent.offsetX;
        offsetY = e.pageY - e.nativeEvent.offsetY;
        props.setSelected(props.index);
        // Hide shadow left behind from dragging
        e.dataTransfer.setDragImage(new Image(), 0, 0);
    };
    const dragEndHandler = (e: any) => {
        e.stopPropagation();
        props.setIsDragging(false);
        offsetX = e.pageX - e.nativeEvent.offsetX;
        offsetY = e.pageY - e.nativeEvent.offsetY;
        props.reRender();
        props.setSelectedWH({ height: 0, width: 0 });
    };
    const handleClick = (e: any) => {
        e.stopPropagation();
        props.setSelected(props.index);
    };

    return (
        <Coord
            ref={coordRef}
            x={clamp(props.rowData.vision, GRAPH_MIN, GRAPH_MAX)}
            y={clamp(props.rowData.ability, GRAPH_MIN, GRAPH_MAX)}
            isFocussed={props.isFocussed}
            shouldDisable={props.shouldDisable}
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
