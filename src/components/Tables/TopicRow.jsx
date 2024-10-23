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
        backgroundColor: mode === "dark" ? "#1a1a1a" : "#f5f5f5",
        ...styles.tableRow,
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

const styles = {
  tableRow: {
    verticalAlign: "baseline",
    borderBottom: "1px solid #EDEDED",
  },
};

export default TopicRow;
