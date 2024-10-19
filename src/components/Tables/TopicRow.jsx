import { TableRow } from "@mui/material";
import UniversalCell from "../TableCells/UniversalCell";
import { useColorScheme } from "@mui/material";

function TopicRow({ row, rows, isEditable, setRows, index }) {
  const { action, description, visual, code, emoji } = row.item.item;
  const { mode } = useColorScheme();

  const rowData = [
    {
      key: "action",
      value: action,
    },
    {
      key: "description",
      value: description,
    },
    {
      key: "code",
      value: code,
    },
    {
      key: "visual",
      value: visual,
    },
  ];

  return (
    <TableRow
      sx={{
        verticalAlign: "baseline",
        borderBottom: "1px solid #EDEDED",
        backgroundColor: mode === "light" ? "#f5f5f5" : "#1a1a1a",
      }}
    >
      {rowData.map(({ key, value }) =>
        value ? (
          <UniversalCell key={key} column={key} data={value} index={index} />
        ) : null
      )}
    </TableRow>
  );
}

export default TopicRow;
