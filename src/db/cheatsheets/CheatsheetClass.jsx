// Class definition for Cheatsheet Entry
// For required to be Array dont put [] as default, it will trigger column. Let it be null
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
    prerequisite,
    //
    visual,
    gui,
    cli,
    //
    code,
    typeCode,
    exampleCode,
    //
    emoji,
    priority,
    //
    contentContributor,
    githubContributor,
  }) {
    this.id = id;
    //
    this.topic = topic;
    this.table = table;
    //
    this.action = action;
    this.description = description;
    //
    this.prerequisite = Array.isArray(prerequisite) ? prerequisite : null;
    //
    this.visual = Array.isArray(visual) ? visual : null;
    this.gui = Array.isArray(gui) ? gui : null;
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
      : null;
    this.githubContributor = Array.isArray(githubContributor)
      ? githubContributor
      : null;
  }
}

export default Cheatsheet;
