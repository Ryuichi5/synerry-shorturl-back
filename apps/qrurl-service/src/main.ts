import { NestFactory } from '@nestjs/core';
import { QrurlServiceModule } from './qrurl-service.module';

async function bootstrap() {
  const app = await NestFactory.create(QrurlServiceModule);
  await app.listen(3002);
}
bootstrap();
