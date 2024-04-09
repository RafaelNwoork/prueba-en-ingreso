import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { Band } from './entities/band.entity';
import { BandMember } from './entities/band-member.entity';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: '172.27.32.1',
  port: 5432,
  username: 'postgres',
  password: '123',
  database: 'test',
  entities: [Band, BandMember],
  subscribers: [],
  migrations: [],
});
