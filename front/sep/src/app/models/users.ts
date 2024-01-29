export class User {
  _id?: number;
  name: string;
  last_name: string;
  email: string;
  password: number;

  constructor(name: string, last_name: string, email: string, password: number) {
    this.name = name;
    this.last_name = last_name;
    this.email = email;
    this.password = password;
  }
}
