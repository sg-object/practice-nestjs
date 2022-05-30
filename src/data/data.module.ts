import { Module } from '@nestjs/common';
import { DataService } from './data.service';
import { DataController } from './data.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Notebook } from './entities/notebook.entity';
import { Model } from './entities/model.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Notebook, Model])],
  controllers: [DataController],
  providers: [DataService],
})
export class DataModule {}
