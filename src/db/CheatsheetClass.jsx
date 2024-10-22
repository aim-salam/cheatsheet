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
    code,
    visual,
    emoji,
    //
    contentContributor,
    githubContributor,
  }) {
    this.id = id;
    //
    this.topic = topic;
    this.table = table;
    //
    this.action = Array.isArray(action) ? action : [];
    this.description = Array.isArray(description) ? description : [];
    this.code = Array.isArray(code) ? code : [];
    this.visual = Array.isArray(visual) ? visual : [];
    this.emoji = Array.isArray(emoji) ? emoji : [];

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
