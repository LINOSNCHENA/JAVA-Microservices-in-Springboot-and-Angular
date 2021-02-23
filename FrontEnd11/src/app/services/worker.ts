export class Worker {

  id!: number;
  name!: String;
  dept!: String;
  post!: String;
  salary!: number;
  status!: String;
  createdat = new Date();

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}