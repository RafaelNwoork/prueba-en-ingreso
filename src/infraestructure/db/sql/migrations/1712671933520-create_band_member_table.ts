import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateBandMemberTable1712671933520 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`CREATE TABLE IF NOT EXISTS band_members (
            id SERIAL PRIMARY KEY,
            name VARCHAR NOT NULL,
            role VARCHAR NOT NULL,
            "bandId" INTEGER NOT NULL,
            CONSTRAINT "bandId" FOREIGN KEY("bandId") REFERENCES band(id) ON DELETE CASCADE
        )`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE IF EXISTS band_members`);
  }
}
