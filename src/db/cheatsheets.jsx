function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

export const cheatsheets = [
  createData("Frozens", "99", 6.0, 12, 2.0),
  createData("Frozen", "99", 9.0, 37, 4.3),
  createData("Eclair", "99", 16.0, 24, 6.0),
  createData("Cupcake", "99", 3.7, 67, 4.3),
  createData("Gingerbread", "99", 16.0, 49, 3.9),
];
