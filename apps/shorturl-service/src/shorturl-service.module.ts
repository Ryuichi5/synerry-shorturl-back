import { Module } from '@nestjs/common';
import { ShorturlServiceController } from './shorturl-service.controller';
import { ShorturlServiceService } from './shorturl-service.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { config } from 'dotenv';
import { Shorturl } from './typeorm/entities/Shorturl.entity';
import { ShorturlModule } from './shorturl/shorturl.module';

config();

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
        Shorturl
      ],
      synchronize: true
    }),
    ShorturlModule
  ],
  controllers: [ShorturlServiceController],
  providers: [ShorturlServiceService],
})
export class ShorturlServiceModule {}
