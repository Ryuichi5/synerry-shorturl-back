import { NestFactory } from '@nestjs/core';
import { TestServerModule } from './test-server.module';

async function bootstrap() {
  const app = await NestFactory.create(TestServerModule);
  await app.listen(3001);
}
bootstrap();
