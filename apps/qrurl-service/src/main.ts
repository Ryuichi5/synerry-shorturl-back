import { NestFactory } from '@nestjs/core';
import { QrurlServiceModule } from './qrurl-service.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(QrurlServiceModule);
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    transform: true,
   }));
  await app.listen(3002);
}
bootstrap();
