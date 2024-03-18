import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1710681115207 implements MigrationInterface {
    name = 'Migration1710681115207'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "category" ADD "description" character varying(200) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "category" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "category" ADD "name" character varying(30) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "category" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "category" ADD "name" character varying(200) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "category" DROP COLUMN "description"`);
    }

}
