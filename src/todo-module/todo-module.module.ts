import { Module } from '@nestjs/common';
import { GenerateIDService } from 'src/common-module/common-module.service';
import { TodoControllerController } from './todo-controller/todo-controller.controller';
import { TodoModuleService } from './todo-module.service';
@Module({
  controllers: [TodoControllerController],
  providers: [TodoModuleService,GenerateIDService],
})
export class TodoModuleModule {}
