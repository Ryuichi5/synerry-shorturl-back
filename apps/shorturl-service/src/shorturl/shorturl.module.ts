import { Module } from '@nestjs/common';
import { ShorturlController } from './controllers/shorturl/shorturl.controller';
import { ShorturlService } from './service/shorturl/shorturl.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Shorturl } from '../typeorm/entities/Shorturl.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Shorturl])],
  controllers: [ShorturlController],
  providers: [ShorturlService]
})
export class ShorturlModule {}
