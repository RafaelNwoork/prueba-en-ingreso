import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import 'reflect-metadata';
import { AppDataSource } from './infraestructure/db/sql/data-source';

async function bootstrap() {
  console.log('AAAA');
  AppDataSource.initialize()
    .then(async (ds) => {
      const app = await NestFactory.create(AppModule);

      ds.query(`SELECT 1 + 2 AS "res"`).then((res) => console.log(res));

      await app.listen(3000);
    })
    .catch((e: any) => console.log(e));
}
bootstrap();
