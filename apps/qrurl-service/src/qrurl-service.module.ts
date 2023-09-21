import { Module } from '@nestjs/common';
import { QrurlServiceController } from './qrurl-service.controller';
import { QrurlServiceService } from './qrurl-service.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Qrurl } from './typeorm/entities/Qrurl.entity';


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
        Qrurl
      ],
      synchronize: true
    })
  ],
  controllers: [QrurlServiceController],
  providers: [QrurlServiceService],
})
export class QrurlServiceModule {}
