import { NestFactory } from '@nestjs/core';
import { ShorturlServiceModule } from './shorturl-service.module';

async function bootstrap() {
  const app = await NestFactory.create(ShorturlServiceModule);
  await app.listen(3001);
}
bootstrap();
