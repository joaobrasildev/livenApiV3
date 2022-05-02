import {MigrationInterface, QueryRunner} from "typeorm";

export class addressEntity1651492032252 implements MigrationInterface {
    name = 'addressEntity1651492032252'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "addresses" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "postalCode" character varying(8) NOT NULL, "street" character varying(100) NOT NULL, "number" integer NOT NULL, "complement" character varying(50), "neighborhood" character varying(100) NOT NULL, "state" character varying(2) NOT NULL, "city" character varying(100) NOT NULL, "country" character varying(2) NOT NULL, "user_id" uuid NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_745d8f43d3af10ab8247465e450" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "addresses" ADD CONSTRAINT "FK_16aac8a9f6f9c1dd6bcb75ec023" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "addresses" DROP CONSTRAINT "FK_16aac8a9f6f9c1dd6bcb75ec023"`);
        await queryRunner.query(`DROP TABLE "addresses"`);
    }

}
