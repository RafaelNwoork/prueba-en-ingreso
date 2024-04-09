import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AppDataSource } from './infraestructure/db/sql/data-source';

async function bootstrap() {
  AppDataSource.initialize()
    .then(async (ds) => {
      ds.query(`SELECT 1 + 2 AS "res"`).then((res) => console.log(res));

      const app = await NestFactory.create(AppModule);

      await app.listen(3000).then(() => console.log('Listening on port 3000'));
    })
    .catch((e: any) => console.log(e));
}
bootstrap();
