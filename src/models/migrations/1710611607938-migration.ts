import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1710611607938 implements MigrationInterface {
    name = 'Migration1710611607938'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "category" ("id" SERIAL NOT NULL, "name" character varying(200) NOT NULL, CONSTRAINT "PK_9c4e4a89e3674fc9f382d733f03" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "category"`);
    }

}
