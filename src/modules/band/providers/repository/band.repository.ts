import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Band } from 'infraestructure/db/sql/entities/band.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BandRepository {
  constructor(
    @InjectRepository(Band)
    private readonly ormBandRepository: Repository<Band>,
  ) {}

  async getAllBands(): Promise<Band[]> {
    return this.ormBandRepository.find();
  }
}
