import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateBandTable1712671921364 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`CREATE TABLE IF NOT EXISTS band (
            id SERIAL PRIMARY KEY,
            name VARCHAR NOT NULL,
            genre VARCHAR NOT NULL,
            country VARCHAR NOT NULL,
            active BOOLEAN NOT NULL
        );`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE IF EXISTS band`);
  }
}
