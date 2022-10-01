import { todostatus } from "../todo-model";

export class TodoUpdate {
    constructor(
 public name: string,
 public description: string,
public  status: todostatus){}
}
