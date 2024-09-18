import { useState, useEffect } from "react";

import { initializeApp } from "firebase/app";
import { getAnalytics, logEvent } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyCBvTQGABIdbUweZnoZu3K3fSZ8tcYuUhU",
  authDomain: "cheatsheet-1b79b.firebaseapp.com",
  projectId: "cheatsheet-1b79b",
  storageBucket: "cheatsheet-1b79b.appspot.com",
  messagingSenderId: "455671111697",
  appId: "1:455671111697:web:5fd68a3f7d7a44348391b0",
  measurementId: "G-NMEXYV70SV",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

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
    console.log("page_view: Home");
    logEvent(analytics, "page_view: Home");

    // Cleanup the event listener on component unmount
  }, []);

  return { topic, setTopic };
}

export default useHomePage;
