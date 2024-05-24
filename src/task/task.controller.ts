import { BadRequestException, Body, Controller, Get, Param, Post } from '@nestjs/common';
import { TaskService } from './task.service';
import { Task } from '@prisma/client';

@Controller()
export class TaskController {
    constructor(private readonly taskService: TaskService) {}

    @Post()
    addTask(@Body() taskData: {name: string, userId: string, priority:number}): Promise<Task> {
        if(taskData)
            return this.taskService.addTask(taskData.name, taskData.userId.toString(), taskData.priority);
    }

    @Get('user/:userId')
    getTaskForUser(@Param('userId') userId: string): Promise<Task[]>{
        if(!userId || isNaN(Number(userId)) || Number(userId)<=0)
            throw new BadRequestException('UserId is not valid');
        return this.taskService.getUserTasks(userId);
    }

}
