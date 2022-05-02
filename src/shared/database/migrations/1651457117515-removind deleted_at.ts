import {MigrationInterface, QueryRunner} from "typeorm";

export class removindDeletedAt1651457117515 implements MigrationInterface {
    name = 'removindDeletedAt1651457117515'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "deleted_at"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD "deleted_at" date`);
    }

}
