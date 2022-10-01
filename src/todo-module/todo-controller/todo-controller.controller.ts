import {
  Controller,
  Body,
  Delete,
  Get,
  NotFoundException,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { randomUUID, RandomUUIDOptions } from 'crypto';
import { brotliDecompressSync } from 'zlib';
import { TodoCreate } from '../dto/todo-create.dto';
import { TodoUpdate } from '../dto/todo-update.dto';
import { TodoModel } from '../todo-model';

@Controller('todo-controller')
export class TodoControllerController {
  private todos: TodoModel[] = [];
  @Get()
  getTodtodos() {
    return this.todos;
  }

  @Post()
  addTodo(@Body() newTodo: TodoCreate): TodoModel {
    const { name, description, status } = newTodo;
    const id = randomUUID();
    const createdAt = new Date();
    const todo = new TodoModel(id, name, description, status, createdAt);
    this.todos.push(todo);
    return todo;
  }
  @Get(':id')
  getTodoById(@Param('id') id): TodoModel {
    const todo = this.todos.find((actualTodo) => actualTodo.id == id);
    if (todo) return todo;
    throw new NotFoundException(`le Todo d'ID ${id} n''existe pas`);
  }
  @Delete(':id')
  deleteTodo(@Param('id') id) {
    {
      //chercher l'objet via son id
      const index = this.todos.findIndex((todo) => todo.id == id);
      //utiliser la méthode slice pour supprimer s'il existe
      if (index >= 0) {
        this.todos.splice(index, 1);
      }
      //sinon je vais déclencher une exception
      else {
        throw new NotFoundException(`Le todo d'ID ${id} n'existe pas`);
      }
      return { message: `Le todo d'ID ${id} a été supprimé avec succès` };
    }
  }
  @Put(':id')
  updateTodoById(@Param('id') id, @Body() newTodo: TodoUpdate): TodoModel {
    const todo = this.getTodoById(id);
    todo.description = newTodo.description
      ? newTodo.description
      : todo.description;
    todo.name = newTodo.name ? newTodo.name : todo.name;

    console.log(todo);
    return todo;
  }
}
