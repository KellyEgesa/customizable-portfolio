export class SkillGroup {
  constructor({ title, icon, statement, route }) {
    this.title = title;
    this.icon = icon;
    this.statement = statement;
    this.route = route;
  }

  getTitle() {
    return this.title;
  }

  getRoute() {
    return this.route;
  }

  getStatement() {
    return this.statement;
  }

  getIcon() {
    return this.icon;
  }
}
