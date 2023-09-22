import { Body, ConflictException, Controller, Get , NotFoundException, Post, Req } from '@nestjs/common';
import { Users } from 'apps/auth-service/src/typeorm/entities/Users.entity';
import { UsersService } from '../../service/users/users.service';
import { CreateUserDto } from '../../dtos/create-user.dto';
import { LoginDto } from '../../dtos/login.dto';
import { ResponseRequiredObject } from '../../../../helpers/response-required-object.helper';
import { AuthenticationHelpers } from 'apps/auth-service/helpers/authentication.helper';

@Controller('users')
export class UsersController {
    constructor(private readonly UserService: UsersService) {}
    
      // Endpoint to retrieve user information using a Bearer token


    @Get()
    async getUsers(): Promise<Users[]> {
      return this.UserService.findAll();
    }

    @Get("/profile")
    async get(
      @Req() request : Request
    ){
        try{ 
          const payload = AuthenticationHelpers.checkAuthentication(request);
          const profile : Users = await this.UserService.findPublicDataById(payload.userId);
          const repsonseData : ResponseRequiredObject = {
            status : true
            ,message : "ok"
            ,data : {
              profile
            }
        };
    
        return repsonseData;
  
      }catch(error : any){
      }
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
