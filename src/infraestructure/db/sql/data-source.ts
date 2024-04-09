import 'reflect-metadata';
import { DataSource } from 'typeorm';
import Migrations from './migrations';
import Entities from './entities';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: '172.27.32.1',
  port: 5432,
  username: 'postgres',
  password: '123',
  database: 'test',
  entities: Entities,
  subscribers: [],
  migrations: Migrations,
});
