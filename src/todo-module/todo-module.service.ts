import { Injectable, NotFoundException } from '@nestjs/common';
import { GenerateIDService } from 'src/common-module/common-module.service';
import { TodoModel } from './todo-model';

@Injectable()
export class TodoModuleService {
    constructor(private generateIDService: GenerateIDService) { }
    private todos = [];


    async addTodo(newTodo) {
        const { name, description, status } = newTodo;
        const id = this.generateIDService.generate();
        const createdAt = new Date();
        const todo = new TodoModel(id, name, description, status, createdAt);
        this.todos.push(todo);
        console.log(newTodo);
        return newTodo;

    }
    async getAll() {
        return this.todos;
    }
    async update(id, newTodo) {
        const todo1 = this.todos.find((actualTodo) => actualTodo.id == id);
        if (todo1) {
            todo1.description = newTodo.description
                ? newTodo.description
                : todo1.description;
            todo1.name = newTodo.name ? newTodo.name : todo1.name;
            return todo1;
        }
        else throw new NotFoundException(`le Todo d'ID ${id} n''existe pas`);
    }
}
