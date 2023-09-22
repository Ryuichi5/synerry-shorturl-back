import { NestFactory } from '@nestjs/core';
import { AuthServiceModule } from './auth-service.module';
import { ValidationPipe } from '@nestjs/common';
import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';

async function bootstrap() {
  const app = await NestFactory.create(AuthServiceModule);
  app.useGlobalPipes(new ValidationPipe({
     whitelist: true,
     transform: true,
    }));

    const corsOptions: CorsOptions = {
      origin: 'http://localhost:3000', // Replace with the actual origin of your Nuxt.js frontend
      methods: ['GET', 'POST', 'PUT', 'DELETE'], // Specify the allowed HTTP methods
    };
  
    app.enableCors(corsOptions);
    
  await app.listen(3003);
}
bootstrap();
