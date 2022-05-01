import {MigrationInterface, QueryRunner} from "typeorm";

export class initial1651448868093 implements MigrationInterface {
    name = 'initial1651448868093'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "users" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(200) NOT NULL, "email" character varying(200) NOT NULL, "password" character varying(200) NOT NULL, "cpf" character varying(11) NOT NULL, "birthDate" date NOT NULL, "phone" character varying(11) NOT NULL, "created_at" date NOT NULL DEFAULT now(), "updated_at" date NOT NULL DEFAULT now(), "deleted_at" date, CONSTRAINT "UQ_230b925048540454c8b4c481e1c" UNIQUE ("cpf"), CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "users"`);
    }

}
