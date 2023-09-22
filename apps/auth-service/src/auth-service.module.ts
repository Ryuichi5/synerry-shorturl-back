import { Module } from '@nestjs/common';
import { AuthServiceController } from './auth-service.controller';
import { AuthServiceService } from './auth-service.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from './typeorm/entities/Users.entity';
import { UsersController } from './users/controllers/users/users.controller';
import { UsersService } from './users/service/users/users.service';
import { UsersModule } from './users/users.module';
import { JwtModule } from '@nestjs/jwt';
import {config} from 'dotenv';

config();

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: "45.144.164.74",
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [
        Users,
      ],
      synchronize: true
    }), UsersModule ],
  
  controllers: [AuthServiceController],
  providers: [AuthServiceService],
})
export class AuthServiceModule {}
