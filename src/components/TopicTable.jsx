import * as React from "react";
import { useEffect, useState } from "react";
import { Stack, useColorScheme, Button, IconButton } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import EditIcon from "@mui/icons-material/Edit";

import Fuse from "fuse.js";
import GUICell from "./GUICell";
import CodeCell from "./CodeCell";
import ActionCell from "./ActionCell";
import VisualCell from "./VisualCell";
import CLICell from "./CLICell";
import EmojiCell from "./EmojiCell";
import CreateRowButton from "./CreateRowButton";
import OptionsCell from "./OptionsCell";

import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

function TopicTable({ cheatsheets }) {
  const [rows, setRows] = useState([]);
  const [isOptions, setIsOptions] = useState(false);
  const { mode } = useColorScheme();

  const fuse = new Fuse(cheatsheets, {
    keys: ["table"],
    // threshold: 0.3,
  });

  useEffect(() => {
    const result = [...fuse.search("Basic Snapshotting")];
    // do the array sorting
    setRows(result);
  }, []);

  const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
  };

  function onDragEnd(result) {
    console.log(result);
    if (!result.destination) {
      return;
    }

    if (result.destination.index === result.source.index) {
      return;
    }

    const reRows = reorder(rows, result.source.index, result.destination.index);
    // console.log(reRows);
    setRows(reRows);
  }

  function Row({ row, provided, index }) {
    return (
      <TableRow
        ref={provided.innerRef}
        {...provided.draggableProps}
        {...provided.dragHandleProps}
        sx={{
          "&:last-child td, &:last-child th": { border: 0 },
        }}
      >
        <TableCell>
          <ActionCell action={row.item.action} />
        </TableCell>
        <TableCell>
          <VisualCell visual={row.item.visual} />
        </TableCell>
        <TableCell>
          <GUICell gui={row.item.gui} />
        </TableCell>
        <TableCell>
          <CLICell cli={row.item.cli} />
        </TableCell>
        <TableCell>
          <EmojiCell emoji={row.item.emoji} />
        </TableCell>
        {isOptions && (
          <TableCell>
            <OptionsCell row={row} rows={rows} setRows={setRows} />
          </TableCell>
        )}
      </TableRow>
    );
  }

  function RowList({ rows, provided, index }) {
    return rows.map((row, index) => (
      <Draggable key={row.item.id} draggableId={row.item.id} index={index}>
        {(provided) => <Row row={row} provided={provided} index={index}></Row>}
      </Draggable>
    ));
  }

  return (
    <Stack alignItems={"flex-end"}>
      <Stack flexDirection={"row"}>
        <h1>Navigation</h1>
        {/* if admin */}
        <IconButton color="primary" onClick={() => setIsOptions(!isOptions)}>
          <EditIcon />
        </IconButton>
      </Stack>
      <TableContainer component={Paper} sx={{ width: "100%" }}>
        <Table
          sx={{
            minWidth: 650,
          }}
          aria-label="simple table"
        >
          <TableHead>
            <TableRow>
              <TableCell>Action</TableCell>
              <TableCell>Visual</TableCell>
              <TableCell>GUI</TableCell>
              <TableCell>CLI</TableCell>
              {/* <TableCell>Code</TableCell> */}
              <TableCell>Emoji</TableCell>
              {isOptions ? <TableCell>Options</TableCell> : null}
            </TableRow>
          </TableHead>

          <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="list" direction="vertical">
              {(provided) => (
                <TableBody ref={provided.innerRef} {...provided.droppableProps}>
                  <RowList rows={rows} provided={provided}></RowList>
                  {provided.placeholder}
                </TableBody>
              )}
            </Droppable>
          </DragDropContext>
        </Table>
      </TableContainer>
      {/* if admin */}
      <CreateRowButton rows={rows} setRows={setRows}></CreateRowButton>
    </Stack>
  );
}

export default TopicTable;
