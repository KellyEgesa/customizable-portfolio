export class User {
  constructor({
    name,
    title,
    twitterUrl,
    linkedInUrl,
    gitHubUrl,
    phoneNumber,
    email,
    address,
  }) {
    this.name = name;
    this.title = title;
    this.twitterUrl = twitterUrl;
    this.linkedInUrl = linkedInUrl;
    this.gitHubUrl = gitHubUrl;
    this.phoneNumber = phoneNumber;
    this.email = email;
    this.address = address;
  }

  getName() {
    return this.name;
  }
  getTitle() {
    return this.title;
  }
  getTwitterUrl() {
    return this.twitterUrl;
  }
  getLinkedInUrl() {
    return this.linkedInUrl;
  }
  getGitHubUrl() {
    return this.gitHubUrl;
  }
  getPhoneNumber() {
    return this.phoneNumber;
  }
  getEmail() {
    return this.email;
  }
  getAddress() {
    return this.address;
  }
}
