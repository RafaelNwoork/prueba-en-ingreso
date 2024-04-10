import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Band } from 'infraestructure/db/sql/entities/band.entity';
import { Repository } from 'typeorm';
import { GetBandOutputGQL } from '../types/gql/get-bands-output.gql';
import { GetBandInputGQL } from '../types/gql/get-bands-input.gql';

@Injectable()
export class BandService {
  constructor(
    @InjectRepository(Band) private bandRepository: Repository<Band>,
  ) {}

  async findAll(): Promise<GetBandOutputGQL> {
    const bands = await this.bandRepository.find();
    return Promise.resolve({ bands: bands, len: bands.length });
  }

  findOne(id: number): Promise<GetBandInputGQL | null> {
    return this.bandRepository.findOneBy({ id });
  }
}
