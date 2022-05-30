import { Controller, Get, Post } from '@nestjs/common';
import { DataService } from './data.service';

@Controller('data')
export class DataController {
  constructor(private readonly dataService: DataService) {}

  @Post('notebook')
  createNoteBook() {
    this.dataService.createNoteBook();
  }

  @Post('model')
  createModel() {
    this.dataService.createModel();
  }

  @Get('notebook')
  async getNotebook() {
    await this.dataService.selectNotebook();
  }

  @Get('model')
  async getModel() {
    await this.dataService.selectModel();
  }
}
