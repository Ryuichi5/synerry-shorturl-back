import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from 'apps/auth-service/src/typeorm/entities/Users.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from '../../dtos/create-user.dto';

@Injectable()
export class UsersService {

    constructor(@InjectRepository(Users) private user: Repository<Users>) {}

    async findAll(): Promise<Users[]> {
      return this.user.find();
    }

    async createUser(createUserDto: CreateUserDto): Promise<Users> {
        try {
            const newUser = this.user.create(createUserDto);
            return this.user.save(newUser);
        } catch (error) {
            
        }
    
      }
    
}
