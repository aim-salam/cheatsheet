import React, { useState } from "react";

function Greeting({ name }) {
  const [isMorning, setIsMorning] = useState(false);

  return (
    <div>
      <h1>Hello {name}, welcome to React!</h1>
      <p>This is a simple React component.</p>
    </div>
  );
}

export default Greeting;
