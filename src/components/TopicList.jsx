import React from "react";

function TopicList() {
  const topics = [
    { topic: "React", type: "parent" },
    { topic: "Component", type: "children" },
    { topic: "State", type: "children" },
    { topic: "HTML", type: "parent" },
    { topic: "CSS", type: "parent" },
  ];
  return (
    <ul>
      {topics.map((topic) => (
        <li key={topic.topic}>{topic.topic}</li>
      ))}
    </ul>
  );
}

export default TopicList;
