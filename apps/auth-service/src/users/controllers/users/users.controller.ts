import { Body, Controller, Get , Post } from '@nestjs/common';
import { Users } from 'apps/auth-service/src/typeorm/entities/Users.entity';
import { UsersService } from '../../service/users/users.service';
import { CreateUserDto } from '../../dtos/create-user.dto';

@Controller('users')
export class UsersController {
    constructor(private readonly UserService: UsersService) {}
    
    @Get()
    async getUsers(): Promise<Users[]> {
      return this.UserService.findAll();
    }

    @Post()
    async createUser(@Body() createUserDto: CreateUserDto): Promise<Users> {
      return this.UserService.createUser(createUserDto);
    }
}
