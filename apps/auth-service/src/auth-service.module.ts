import { Module } from '@nestjs/common';
import { AuthServiceController } from './auth-service.controller';
import { AuthServiceService } from './auth-service.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from './typeorm/entities/Users.entity';
import { UsersController } from './users/controllers/users/users.controller';
import { UsersService } from './users/service/users/users.service';
import { UsersModule } from './users/users.module';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '45.144.164.74',
      port: 3306,
      username: 'adminroot',
      password: 'jakkapet_2k',
      database: 'synerry',
      entities: [
        Users,
      ],
      synchronize: true
    }), UsersModule ],
  
  controllers: [AuthServiceController],
  providers: [AuthServiceService],
})
export class AuthServiceModule {}
