import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Model } from './model.entity';
import { Notebook } from './notebook.entity';

@Entity('metric')
export class Metric {
  @PrimaryColumn()
  assetId: number;

  @PrimaryColumn()
  version: string;

  @PrimaryColumn()
  metricType: string;

  @Column()
  type: string;

  @ManyToOne(
    (type) => (type instanceof Model ? Model : Notebook),
    (e) => e.metrics,
    { createForeignKeyConstraints: false },
  )
  data: Model | Notebook;

  @CreateDateColumn()
  createDate: Date;

  @UpdateDateColumn()
  updateDate: Date;
}
