import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { User } from '@prisma/client';

@Injectable()
export class UserService {
    constructor(private prismaService: PrismaService) {}

    async addUser(email: string): Promise<User> {
        if(email == null || !this.isValidEmail(email))
            throw new HttpException('Email is null', HttpStatus.BAD_REQUEST);
        const existingUser = await this.prismaService.user.findUnique({ where: { email } });
        if(existingUser)
            throw new HttpException('User already exists', HttpStatus.CONFLICT);
        try {
            return await this.prismaService.user.create({ data: { email } });
        } catch (error) {
            throw new HttpException('Failed to save user', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    async getUser(email: string): Promise<User> {
        if(!email)
            throw new HttpException('email is null', HttpStatus.BAD_REQUEST);
        const user = this.prismaService.user.findFirst({where: {email}});
        if(!user)
            throw new HttpException('user not found', HttpStatus.BAD_REQUEST);
        return user;

    }

    async resetData(): Promise<void> {
        await this.prismaService.user.deleteMany({});
    }

    isValidEmail(email:string): Boolean{
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }
}
