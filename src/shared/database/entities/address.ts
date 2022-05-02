import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { User } from './user';

@Entity('addresses')
export class Address {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false, type: 'varchar', length: 8 })
  postalCode: string;

  @Column({ nullable: false, type: 'varchar', length: 100 })
  street: string;

  @Column({ nullable: false, type: 'int' })
  number: number;

  @Column({ nullable: true, type: 'varchar', length: 50 })
  complement: string;

  @Column({ nullable: false, type: 'varchar', length: 100 })
  neighborhood: string;

  @Column({ nullable: false, type: 'varchar', length: 2 })
  state: string;

  @Column({ nullable: false, type: 'varchar', length: 100 })
  city: string;

  @Column({ nullable: false, type: 'varchar', length: 2 })
  country: string;  

  @Column({ name: 'user_id', type: 'varchar', nullable: false })
  userId: string;

  @CreateDateColumn({ name: 'created_at' })
  public createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  public updatedAt: Date;

  @ManyToOne(() => User, (user) => user.addresses, {
     onDelete: 'CASCADE',
   })
  @JoinColumn({ name: 'user_id' })
  user?: User;
}
