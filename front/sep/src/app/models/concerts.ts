export class Concert {
  _id?: number;
  name: string;
  date: Date;
  description: string;
  img_url: Array<string>;
  clients: Array<string>
  active: boolean;

  constructor(name: string, date: Date, description: string, img_url: string[], clients: string[], active: boolean) {
    this.name = name;
    this.date = date;
    this.description = description;
    this.img_url = img_url;
    this.clients = clients
    this.active = active;
  }
}
