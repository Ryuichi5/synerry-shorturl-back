import { Body, ConflictException, Controller, Get , NotFoundException, Post } from '@nestjs/common';
import { Users } from 'apps/auth-service/src/typeorm/entities/Users.entity';
import { UsersService } from '../../service/users/users.service';
import { CreateUserDto } from '../../dtos/create-user.dto';
import { LoginDto } from '../../dtos/login.dto';
import { ResponseRequiredObject } from '../../helpers/response-required-object.helper';

@Controller('users')
export class UsersController {
    constructor(private readonly UserService: UsersService) {}
    
    @Get()
    async getUsers(): Promise<Users[]> {
      return this.UserService.findAll();
    }

    @Post()
  async createUser(@Body() createUserDto: CreateUserDto): Promise<Users> {
    try {
      return await this.UserService.createUser(createUserDto);
    } catch (error) {
      const repsonseData : ResponseRequiredObject = {
        status : false
        ,message : "User with this name already exists"
      };
      // Handle other exceptions here
      throw error;
    }
  }
    @Post('login')
  async login(@Body() loginUserDto: LoginDto): Promise<{ user: Users; token: string } | null> {
    const result = await this.UserService.login(loginUserDto);

    if (result) {
      return result;
    } else {
      throw new NotFoundException('Invalid credentials');
    }
  }

}
