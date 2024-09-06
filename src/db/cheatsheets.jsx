function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

export const cheatsheets = [
  createData("Frozen", "99", 6.0, 12, 4.0),
  createData("Frozen", "99", 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];
