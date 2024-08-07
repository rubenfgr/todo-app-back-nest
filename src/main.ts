import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { envs } from './config/envs';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api');

  await app.listen(envs.appPort, () => {
    console.log(`Server running on ${envs.appUrl}:${envs.appPort}`);
  });
}
bootstrap();
