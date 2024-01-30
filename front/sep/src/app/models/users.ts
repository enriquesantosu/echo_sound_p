export class User {
  _id?: number;
  name: string;
  last_name: string;
  email: string;
  password: number;
  role?: string;
  active?: string

  constructor(name: string, last_name: string, email: string, password: number, role: string, active: string) {
    this.name = name;
    this.last_name = last_name;
    this.email = email;
    this.password = password;
    this.role = role;
    this.active = active;
  }
}
