import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Asset } from './asset.entity';

@Entity('version')
export class Version {
  @PrimaryColumn()
  assetId: number;

  @PrimaryColumn()
  version: string;

  @Column()
  name: string;

  @ManyToOne(() => Asset, (a) => a.version)
  @JoinColumn({ name: 'assetId' })
  asset: Asset;

  @CreateDateColumn()
  createDate: Date;

  @UpdateDateColumn()
  updateDate: Date;
}
