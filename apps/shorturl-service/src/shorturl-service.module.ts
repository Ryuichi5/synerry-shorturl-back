import { Module } from '@nestjs/common';
import { ShorturlServiceController } from './shorturl-service.controller';
import { ShorturlServiceService } from './shorturl-service.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { config } from 'dotenv';
import { Shorturl } from './typeorm/entities/Shorturl.entity';

config();

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'synerry',
      entities: [
        Shorturl
      ],
      synchronize: true
    })
  ],
  controllers: [ShorturlServiceController],
  providers: [ShorturlServiceService],
})
export class ShorturlServiceModule {}