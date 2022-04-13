import { TableWrapper, ThWrapper, Th, Row, Col, Button } from "./table-style";
import { Checkbox } from "./checkbox-style";

function Table(props: any) {
    const handleChange = (index: number, field: string, value: any) => {
        props.tableData.splice(index, 1, { ...props.tableData[index], [field]: value });
        props.setTableData([...props.tableData]);
    };

    const handleDelete = (index: number) => {
        props.tableData.splice(index, 1);
        props.setTableData([...props.tableData]);
    };

    const handleFocus = (index?: any) => {
        props.setSelected(index);
    };

    const handleCheckToggle = (index: any) => {
        props.tableData.splice(index, 1, { ...props.tableData[index], checked: !props.tableData[index].checked });
        props.setTableData([...props.tableData]);
    };

    return (
        <TableWrapper>
            <ThWrapper>
                <Th></Th>
                <Th>Label</Th>
                <Th>Vision</Th>
                <Th>Ability</Th>
                <Th>Delete</Th>
            </ThWrapper>
            {props.tableData?.map((rowData: any, i: number) => (
                <Row key={rowData.id}>
                    <Checkbox checked={rowData.checked} onClick={() => handleCheckToggle(i)}></Checkbox>
                    <Col
                        value={rowData.label}
                        onChange={(e: any) => handleChange(i, "label", e.target.value)}
                        onFocus={() => handleFocus(i)}
                        onBlur={() => handleFocus()}
                    />
                    <Col
                        value={rowData.vision}
                        type="number"
                        onChange={(e: any) => handleChange(i, "vision", e.target.value)}
                        onFocus={() => handleFocus(i)}
                        onBlur={() => handleFocus()}
                    />
                    <Col
                        value={rowData.ability}
                        type="number"
                        onChange={(e: any) => handleChange(i, "ability", e.target.value)}
                        onFocus={() => handleFocus(i)}
                        onBlur={() => handleFocus()}
                    />
                    <Button onClick={() => handleDelete(i)}>Delete</Button>
                </Row>
            ))}
        </TableWrapper>
    );
}

export default Table;
