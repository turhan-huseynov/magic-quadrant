import { useEffect, useState } from "react";
import Graph from "./components/Graph";
import Table from "./components/Table";
import { AppWrapper, Logo, Container, Button } from "./app-style";
import { GRAPH_MIN, GRAPH_MAX } from "./constants";
import { getUniqueId, randomBetween } from "./helpers";

function App() {
    const [selected, setSelected] = useState<boolean>();
    const [tableData, setTableData] = useState<{ id: string; label: string; vision: number; ability: number, checked: boolean }[] | null>(
        null
    );

    useEffect(() => {
        setTableData([
            { id: getUniqueId(), label: "Microsoft", vision: 36, ability: 80, checked: true },
            { id: getUniqueId(), label: "Google", vision: 82, ability: 55, checked: true },
            { id: getUniqueId(), label: "Amazon", vision: 60, ability: 85, checked: true },
        ]);
    }, []);

    const addRow = () => {
        setTableData([
            ...(tableData || []),
            {
                id: getUniqueId(),
                label: "",
                vision: randomBetween(GRAPH_MIN, GRAPH_MAX),
                ability: randomBetween(GRAPH_MIN, GRAPH_MAX),
                checked: true
            },
        ]);
    };

    return (
        <AppWrapper>
            <Logo src="./logo.png" />
            <Container>
                <Graph
                    leftTitle="Ability to Execute"
                    rightTitle="Completeness of Vision"
                    quadrantTitles={["Challengers", "Leaders", "Niche Players", "Visionaries"]}
                    tableData={tableData}
                    setTableData={setTableData}
                    selected={selected}
                    setSelected={setSelected}
                />
                <Table tableData={tableData} setTableData={setTableData} setSelected={setSelected} />
            </Container>
            <Button onClick={addRow}> + </Button>
        </AppWrapper>
    );
}

export default App;
