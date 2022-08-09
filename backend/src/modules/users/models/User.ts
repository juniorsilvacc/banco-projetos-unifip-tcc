import {
  Entity,
  Column,
  CreateDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';
import { v4 as uuidV4 } from 'uuid';
import { Exclude } from 'class-transformer';
import { Project } from '../../projects/models/Project';

@Entity('users')
class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @OneToMany(() => Project, project => project.user)
  project: Project[];

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  @Exclude()
  password: string;

  @Column()
  registry: string;

  @Column()
  avatar: string;

  @Column()
  isAdmin: boolean;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { User };
