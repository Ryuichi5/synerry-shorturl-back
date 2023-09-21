import { NestFactory } from '@nestjs/core';
import { ShorturlServiceModule } from './shorturl-service.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(ShorturlServiceModule);
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    transform: true,
   }));
  await app.listen(3001);
}
bootstrap();
