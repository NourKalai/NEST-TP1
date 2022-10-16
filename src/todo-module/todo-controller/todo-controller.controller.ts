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

import { TodoCreate } from '../dto/todo-create.dto';
import { TodoUpdate } from '../dto/todo-update.dto';
import { TodoModel } from '../todo-model';
import { TodoModuleService } from '../todo-module.service';

@Controller('todo')
export class TodoControllerController {

  constructor(private readonly todoService: TodoModuleService) { }

  private todos: TodoModel[] = [];
  @Get()
  getTodtodos() {
    return this.todoService.getAll();
  }

  @Post()
  addTodo(@Body() newTodo: TodoCreate): Promise<TodoModel> {

    return this.todoService.addTodo(newTodo);

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
  updateTodoById(@Param('id') id, @Body() newTodo: TodoUpdate):Promise< TodoModel> {
   
   return this.todoService.update(id,newTodo);
  }
}
