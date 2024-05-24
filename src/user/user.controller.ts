import { BadRequestException, Body, Controller, Get, HttpException, HttpStatus, Param, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from '@prisma/client';

@Controller()
export class UserController {
    constructor(private readonly userService : UserService) {}

    @Post()
    async createUser(@Body() payload: { email: string }): Promise<{status: number; user: User}>{
        if(!payload || !payload.email)
            throw new BadRequestException('Email is missing');
        try {
            const user = await this.userService.addUser(payload.email);
            return { status: HttpStatus.CREATED, user };
        } catch(error) {
            if (error.status) 
                throw new HttpException(error.message, error.status);
            throw new HttpException('Internal server error', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @Get("/:email")
    async getUser(@Param('email') email: string): Promise<User> {
        try{
            return this.userService.getUser(email);
        } catch (e) {
            console.log('[error] -> ', e);
        }
    }
}
