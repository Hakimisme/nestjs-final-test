import { Injectable, NotImplementedException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { Task } from '@prisma/client';

@Injectable()
export class TaskService {
    constructor(private prismaService: PrismaService) {}

    addTask(name: string, userId: string, priority: number): Promise<Task> {
        return this.prismaService.task.create({data: {userId: Number(userId), name: name, priority: priority}})
    }

    getTaskByName(name: string): Promise<unknown> {
        throw new NotImplementedException();
    }

    getUserTasks(userId: string): Promise<Task[]> {
        if(userId && isNaN(Number(userId)))
            return this.prismaService.task.findMany({where:{userId : Number(userId)}});
    }

    async resetData(): Promise<void> {
        await this.prismaService.task.deleteMany({});
    }
}
