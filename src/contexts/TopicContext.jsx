import React, { createContext, useState, useContext } from "react";

// 1. Create the context
const TopicContext = createContext();

// 2. Create the provider component
export const TopicProvider = ({ children }) => {
  const [topic, setTopic] = useState({
    topic: "Layout",
    type: "children",
    imageLink: "https://images.cheatsheet.cam/images/image-1726097807593.webp",
    tables: [
      {
        table: "Box model",
        columns: {
          action: true,
          description: true,
          visual: true,
          code: true,
          attention: true,
          // emoji: true,
        },
      },
      {
        table: "Overflow",
        columns: {
          action: true,
          description: true,
          visual: true,
          code: true,
          attention: true,
          // emoji: true,
        },
      },
      {
        table: "Measurement Unit",
        columns: {
          action: true,
          description: true,
          visual: true,
          code: true,
          attention: true,
          // emoji: true,
        },
      },
      {
        table: "Positioning",
        columns: {
          action: true,
          description: true,
          visual: true,
          code: true,
          attention: true,
          // emoji: true,
        },
      },
      {
        table: "Flexbox",
        columns: {
          action: true,
          description: true,
          visual: true,
          code: true,
          attention: true,
          // emoji: true,
        },
      },
    ],
  });

  return (
    <TopicContext.Provider value={{ topic, setTopic }}>
      {children}
    </TopicContext.Provider>
  );
};

// 3. Create a custom hook for easier use of the context
export const useTopic = () => {
  return useContext(TopicContext);
};
