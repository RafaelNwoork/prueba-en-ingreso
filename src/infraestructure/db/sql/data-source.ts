import 'reflect-metadata';
import { DataSource, DataSourceOptions } from 'typeorm';
import Migrations from './migrations';
import Entities from './entities';

export const SQLCredentials: DataSourceOptions = {
  type: 'postgres',
  host: '172.27.32.1',
  port: 5432,
  username: 'postgres',
  password: '123',
  database: 'test',
  entities: Entities,
  subscribers: [],
  migrations: Migrations,
};

export default new DataSource(SQLCredentials);
