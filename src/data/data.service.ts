import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Metric } from './entities/metric.entity';
import { Model } from './entities/model.entity';
import { Notebook } from './entities/notebook.entity';

@Injectable()
export class DataService {
  constructor(
    @InjectRepository(Notebook) private noteRepo: Repository<Notebook>,
    @InjectRepository(Model) private modelRepo: Repository<Model>,
  ) {}

  createNoteBook() {
    const notebook = new Notebook();
    notebook.assetId = 1;
    notebook.version = 'v1';
    notebook.type = 'notebook';

    const metric = new Metric();
    metric.assetId = 1;
    metric.version = 'v1';
    metric.metricType = 'cpu';
    metric.type = 'notebook_metrics_1';

    const metric2 = new Metric();
    metric2.assetId = 1;
    metric2.version = 'v1';
    metric2.metricType = 'memory';
    metric2.type = 'notebook_metrics_2';

    notebook.metrics = [metric, metric2];
    this.noteRepo.save(notebook);
  }

  createModel() {
    const model = new Model();
    model.assetId = 2;
    model.version = 'v3';
    model.type = 'model';

    const metric = new Metric();
    metric.assetId = 2;
    metric.version = 'v3';
    metric.metricType = 'network';
    metric.type = 'model_metrics_1';
    const metric2 = new Metric();
    metric2.assetId = 2;
    metric2.version = 'v3';
    metric2.metricType = 'load';
    metric2.type = 'model_metrics_2';

    model.metrics = [metric, metric2];
    this.modelRepo.save(model);
  }

  async selectNotebook() {
    const res = await this.noteRepo.findOne({
      where: { assetId: 1, version: 'v1' },
      relations: ['metrics'],
    });
    console.log(res);
  }

  async selectModel() {
    const res = await this.modelRepo.findOne({
      where: { assetId: 2, version: 'v3' },
      relations: ['metrics'],
    });
    console.log(res);
  }
}
