import { useState, useEffect } from "react";

// import { logEvent } from "firebase/analytics";
// import { analytics } from "../firebase";
function useHomePage() {
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

  useEffect(() => {
    // console.log("page_view: Home");
    // logEvent(analytics, "page_view: Home");
    // Cleanup the event listener on component unmount
  }, []);

  return { topic, setTopic };
}

export default useHomePage;
