// Class definition for Cheatsheet Entry
class Cheatsheet {
  constructor({
    id,
    //
    topic,
    table,
    //
    action,
    description,
    //
    prerequisite = [], // Default to empty array if not provided
    //
    visual = [], // Default to empty array if not provided
    gui = [],
    cli,
    //
    code,
    typeCode,
    exampleCode,
    //
    emoji,
    priority,
    //
    contentContributor = [],
    githubContributor = [],
  }) {
    this.id = id;
    //
    this.topic = topic;
    this.table = table;
    //
    this.action = action;
    this.description = description;
    //
    this.prerequisite = Array.isArray(prerequisite) ? prerequisite : [];
    //
    this.visual = Array.isArray(visual) ? visual : [];
    this.gui = Array.isArray(gui) ? gui : [];
    this.cli = cli;
    //
    this.code = code;
    this.typeCode = typeCode;
    this.exampleCode = exampleCode;
    //
    this.emoji = emoji;
    this.priority = priority;
    //
    this.contentContributor = Array.isArray(contentContributor)
      ? contentContributor
      : [];
    this.githubContributor = Array.isArray(githubContributor)
      ? githubContributor
      : [];
  }
}

export default Cheatsheet;
