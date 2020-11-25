import { MigrationInterface, QueryRunner } from 'typeorm';

export class Tank1605984351829 implements MigrationInterface {
  name = 'Tank1605984351829';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "tank" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar NOT NULL, "x" integer NOT NULL DEFAULT (0), "y" integer NOT NULL DEFAULT (0), "direction" varchar NOT NULL DEFAULT ('right'))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "tank"`);
  }
}
