export class User {
  constructor(
    private username: string,
    private password: string,
    private valid: boolean
  ) {}

  getUsername() {
    return this.username;
  }

  getPassword() {
    return this.password;
  }
  isValid() {
    return this.valid;
  }
}