import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Todo } from './entities/todo.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(Todo)
    private readonly todoRepository: Repository<Todo>,
  ) {}

  async createTodo(input: CreateTodoDto): Promise<Todo> {
    const { task } = input;
    const todo = this.todoRepository.create({ task });
    const newTodo = await this.todoRepository.save(todo);
    return newTodo;
  }

  async getAllTodos(): Promise<Todo[]> {
    const todos = await this.todoRepository.find();
    return todos;
  }

  async getOneTodo(id: number): Promise<Todo> {
    const todo = await this.todoRepository.findOneBy({ id });
    if (!todo) {
      throw new NotFoundException('Todo not found');
    }
    return todo;
  }

  async updateTodo(id: number, input: UpdateTodoDto): Promise<Todo> {
    const updatedTodo = await this.getOneTodo(id);
    await this.todoRepository.update({ id }, { ...input });
    const newTodo = { ...updatedTodo, ...input };
    return newTodo;
  }
}
