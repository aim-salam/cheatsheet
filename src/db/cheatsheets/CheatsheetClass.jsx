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
    codeType,
    exampleCode,
    //
    attention,
    //
    // emoji,
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
    this.codeType = codeType;
    this.exampleCode = exampleCode;
    //
    this.attention = Array.isArray(attention) ? attention : null;
    //
    // this.emoji = emoji;
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
