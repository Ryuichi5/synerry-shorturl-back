import { Module } from '@nestjs/common';
import { QrurlController } from './controllers/qrurl/qrurl.controller';
import { QrurlService } from './service/qrurl/qrurl.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Qrurl } from '../typeorm/entities/Qrurl.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Qrurl])],
  controllers: [QrurlController],
  providers: [QrurlService]
})
export class QrurlModule {}
