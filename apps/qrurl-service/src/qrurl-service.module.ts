import { Module } from '@nestjs/common';
import { QrurlServiceController } from './qrurl-service.controller';
import { QrurlServiceService } from './qrurl-service.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Qrurl } from './typeorm/entities/Qrurl.entity';
import { QrurlModule } from './qrurl/qrurl.module';
import {config} from 'dotenv';

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
        Qrurl
      ],
      synchronize: true
    }),
    QrurlModule
  ],
  controllers: [QrurlServiceController],
  providers: [QrurlServiceService],
})
export class QrurlServiceModule {}
