import { Exclude } from 'class-transformer';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  Unique,
  UpdateDateColumn,
} from 'typeorm';

@Entity('users')
@Unique(['email'])
@Unique(['cpf'])
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false, type: 'varchar', length: 200 })
  name: string;

  @Column({ nullable: false, type: 'varchar', length: 200  })
  email: string;

  @Exclude()
  @Column({ nullable: false, type: 'varchar', length: 200  })
  password: string;

  @Column({ nullable: false, type: 'varchar', length: 11  })
  cpf: string;

  @Column({ nullable: false, type: 'date' })
  birthDate: Date;

  @Column({ nullable: false, type: 'varchar', length: 14  })
  phone: string;

  @CreateDateColumn({ name: 'created_at', type: 'date' })
  public createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', type: 'date' })
  public updatedAt: Date;
}
