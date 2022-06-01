import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Version } from './version.entity';

@Entity('asset')
export class Asset {
  @PrimaryGeneratedColumn()
  assetId: number;

  @Column()
  type: string;

  @OneToMany(() => Version, (v) => v.asset, { cascade: true })
  version: Version[];

  @CreateDateColumn()
  createDate: Date;

  @UpdateDateColumn()
  updateDate: Date;
}
