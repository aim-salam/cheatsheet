import React, { useState } from "react";
// Import ThemeContext
import { ThemeContext } from "./ThemeContext";

export function GrandparentComponent() {
  const [theme, setTheme] = useState(false); // Manage state here

  return (
    // set value on provider/grandparent
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
