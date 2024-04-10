import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import AppDataSource from './infraestructure/db/sql/data-source';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const logger = new Logger('Root');
  AppDataSource.initialize()
    .then(async (ds) => {
      ds.query(`SELECT 'PostgreSQL Connection Working' AS "status"`).then(
        (res) => logger.debug(res[0].status),
      );

      const app = await NestFactory.create(AppModule);

      await app.listen(3000).then(() => logger.log('Listening on port 3000'));
    })
    .catch((e: any) => logger.fatal(e));
}
bootstrap();
