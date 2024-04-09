import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: '172.27.32.1',
  port: 5432,
  username: 'postgres',
  password: '123',
  database: 'test',
  entities: ['src/infraestructure/db/sql/entities/*.entity.{ts,js}'],
  subscribers: [],
  migrations: ['src/infraestructure/db/sql/migrations/*.{ts,js}'],
});
