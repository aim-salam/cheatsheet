import { useState, useEffect } from "react";
import Fuse from "fuse.js";

// Fuse.js initialization moved outside the component for better performance
const createFuseInstance = (cheatsheets) =>
  new Fuse(cheatsheets, {
    keys: ["item.table"],
    threshold: 0.0,
  });

function useTable({ table, cheatsheets }) {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    const fuse = createFuseInstance(cheatsheets);
    const result = fuse.search(table.table);
    setRows(result);
  }, [cheatsheets, table.table]);
  return { rows, setRows };
}

export default useTable;
