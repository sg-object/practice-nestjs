import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Metric } from './metric.entity';

@Entity('notebook')
export class Notebook {
  @PrimaryColumn()
  assetId: number;

  @PrimaryColumn()
  version: string;

  @Column()
  type: string;

  @OneToMany(() => Metric, (m) => m.data, { cascade: ['insert', 'update'] })
  metrics: Metric[];

  @CreateDateColumn()
  createDate: Date;

  @UpdateDateColumn()
  updateDate: Date;
}
