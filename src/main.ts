import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AppDataSource } from './infraestructure/db/sql/data-sources';

async function bootstrap() {
  AppDataSource.initialize()
    .then(async () => {
      const app = await NestFactory.create(AppModule);
      await app.listen(3000);
    })
    .catch((e) => console.log(e));
}
bootstrap();
