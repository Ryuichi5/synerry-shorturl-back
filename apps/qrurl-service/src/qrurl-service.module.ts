import { Module } from '@nestjs/common';
import { QrurlServiceController } from './qrurl-service.controller';
import { QrurlServiceService } from './qrurl-service.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Qrurl } from './typeorm/entities/Qrurl.entity';
import { QrurlModule } from './qrurl/qrurl.module';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '*',
      port: 3306,
      username: 'root',
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
