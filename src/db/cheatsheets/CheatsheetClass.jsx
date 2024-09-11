// Class definition for Cheatsheet Entry
class Cheatsheet {
  constructor({
    id,
    topic,
    table,
    action,
    description,
    prerequisite, // []
    visual, // [],
    gui, // [],
    cli,
    code,
    typeCode,
    exampleCode,
    emoji,
    priority,
    contentContributor,
    githubContributor, //[]
  }) {
    this.id = id;
    this.topic = topic;
    this.table = table;
    this.action = action;
    this.description = description;
    this.prerequisite = prerequisite;
    this.visual = visual;
    this.gui = gui;
    this.cli = cli;
    this.code = code;
    this.typeCode = typeCode;
    this.exampleCode = exampleCode;
    this.emoji = emoji;
    this.priority = priority;
    this.contentContributor = contentContributor;
    this.githubContributor = githubContributor;
  }

  // Method to update the description
  updateDescription(newDescription) {
    this.description = newDescription;
  }

  // Method to add a prerequisite
  addPrerequisite(text, link) {
    this.prerequisite.push({ text, link });
  }

  // Method to add a visual
  addVisual(text, link) {
    this.visual.push({ text, link });
  }

  // Method to add a GUI entry
  addGui(text, link) {
    this.gui.push({ text, link });
  }

  // Method to add a content contributor
  addContentContributor(contributor) {
    this.contentContributor.push(contributor);
  }

  // Method to add a GitHub contributor
  addGithubContributor(contributor) {
    this.githubContributor.push(contributor);
  }
}

// Example of creating a new Cheatsheet Entry
const gitCheatsheetEntry = new Cheatsheet({
  id: "dasdasdada",
  topic: "git",
  table: "Basic Snapshotting",
  action: "Check file changes",
  description: "",
  prerequisite: [{ text: "", link: "" }],
  visual: [{ text: "", link: "" }],
  gui: [{ text: "", link: "" }],
  cli: "git ..",
  code: "",
  typeCode: "",
  exampleCode: "",
  emoji: "❄️",
  priority: 1,
  contentContributor: [],
  githubContributor: [],
});

export default Cheatsheet;
