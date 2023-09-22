import { ConflictException, Inject, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from 'apps/auth-service/src/typeorm/entities/Users.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from '../../dtos/create-user.dto';
import { LoginDto } from '../../dtos/login.dto';
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';

// Configure JWT with a secret key (replace 'your-secret-key' with your actual secret key)
const jwtSecret = 'QAGiuGp4rSLsUSYWruclnQ5qa1VxAmVuReeImv0biNreD4sau7';

@Injectable()
export class UsersService {

    constructor(@InjectRepository(Users) private user: Repository<Users>) {}

    async findAll(): Promise<Users[]> {
      return this.user.find();
    }

    public async findPublicDataById(id : number){
      const user : Users = await this.findById(id);
     
      delete user.password;
      return user;
   }

   public async findById(id : number) : Promise<Users>
   {
     return (await this.user.find(
           {
             where : {id} 
           }
     ))[0];
   }

    async createUser(createUserDto: CreateUserDto): Promise<Users> {
      // Check if a user with the same name already exists
      const existingUser = await this.user.findOne({ where: { name: createUserDto.name } });
      if (existingUser) {
        throw new ConflictException('User with this name already exists');
      }
  
      // Continue creating the user if no conflict
      try {
        // Hash the user's password before saving it to the database
        const hashedPassword = await bcrypt.hash(createUserDto.password, 10); // Use 10 salt rounds
  
        const newUser = this.user.create({
          name: createUserDto.name,
          password: hashedPassword, // Store the hashed password
        });
  
        return this.user.save(newUser);
      } catch (error) {
        // Handle error
      }
    }


    async login(loginUserDto: LoginDto): Promise<{ user: Users; token: string } | null> {
      const user = await this.user.findOne({
        where: { name: loginUserDto.name },
      });
  
      if (!user) {
        throw new NotFoundException('User not found');
      }
  
      const isPasswordValid = await bcrypt.compare(
        loginUserDto.password,
        user.password
      );
  
      if (isPasswordValid) {
        // Generate a JWT token
        const token = jwt.sign({ userId: user.id }, jwtSecret, {
          expiresIn: '1h', // Set the token expiration time
        });
  
        return { user, token };
      } else {
        throw new NotFoundException('Invalid credentials');
      }
    }
    }
      

    

