import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Tank } from './tank.entity';

@Injectable()
export class TanksService {
  constructor(
    @InjectRepository(Tank)
    private tanksRepository: Repository<Tank>,
  ) {}

  findAll(): Promise<Tank[]> {
    return this.tanksRepository.find();
  }

  createOne(tank: Tank) {
    return this.tanksRepository.create();
  }

  findOne(id: number): Promise<Tank> {
    return this.tanksRepository.findOne(id);
  }

  async updateOne(id: number, tankIn: Partial<Tank>) {
    await this.tanksRepository.update(id, tankIn);

    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.tanksRepository.delete(id);
  }
}
