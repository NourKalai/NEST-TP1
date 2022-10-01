import { todostatus } from "../todo-model";

export class TodoCreate{
    constructor(
  public name: string,
  public description: string,
  public status?: todostatus.waiting){}
}
