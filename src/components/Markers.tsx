import { memo, useEffect, useState } from "react";
import Marker from "./Marker";
import { CHART_SIZE } from "../constants";
import { clamp } from "../helpers";

let isDraggingCopy = false;

const Markers = (props: any) => {
    const [isDragging, setIsDragging] = useState(false);

    useEffect(() => {
        isDraggingCopy = isDragging;
    }, [isDragging]);

    const handleCoordinateUpdate = (index: number, x: number, y: number) => {
        props.tableData.splice(index, 1, {
            ...props.tableData[index],
            vision: clamp((x - props.defaultLeft) / (CHART_SIZE / 100), 0, 100),
            ability: clamp((props.defaultBottom - y) / (CHART_SIZE / 100), 0, 100),
        });
        props.setTableData([...props.tableData]);
    };
    return props.tableData?.map((rowData: any, i: number) => (
        <Marker
            key={`${rowData.vision}-${rowData.ability}-${i}`}
            isFocussed={i === props.selected}
            rowData={rowData}
            index={i}
            setSelected={props.setSelected}
            handleCoordinateUpdate={handleCoordinateUpdate}
            reRender={() => props.setTableData([...props.tableData])}
            defaultLeft={props.defaultLeft}
            defaultBottom={props.defaultBottom}
            isDragging={isDragging}
            setIsDragging={setIsDragging}
            shouldDisable={!rowData.isChecked}
            setSelectedWH={props.setSelectedWH}
        ></Marker>
    ));
};

// Updating coordinate during dragging re-renders the component which cancels dragging process. Using memo to prevent re-render.
export default memo(Markers, () => isDraggingCopy);
