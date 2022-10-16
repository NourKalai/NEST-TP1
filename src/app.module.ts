import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PremierModule } from './premier/premier.module';
import { TodoModuleModule } from './todo-module/todo-module.module';
import { TodoControllerController } from './todo-module/todo-controller/todo-controller.controller';
import { CommonModule } from './common-module/common-module.module';
import { GenerateIDService } from './common-module/common-module.service';
import { TodoModuleService } from './todo-module/todo-module.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [PremierModule, TodoModuleModule, CommonModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: ["dist/**/*.entity{.ts,.js}"],
      synchronize: true,
    }),],


  controllers: [AppController, TodoControllerController],
  providers: [AppService, GenerateIDService, TodoModuleModule, TodoModuleService],
})
export class AppModule { }
