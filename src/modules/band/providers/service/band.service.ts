import { Injectable } from '@nestjs/common';
import { GetBandOutputGQL } from '../../types/gql/get-bands-output.gql';
import { CreateBandGQL } from '../../types/gql/create/band.gql';
import { EditBandGQL } from '../../types/gql/edit/band-input.gql';
import { BandRepository } from '../repository/band.repository';
import { Band } from 'infraestructure/db/sql/entities/band.entity';

@Injectable()
export class BandService {
  constructor(private bandRepository: BandRepository) {}

  // Deberia ser Promise<BandDTO>, pero que flojera.
  async findAll(): Promise<GetBandOutputGQL> {
    return await this.bandRepository.findAll();
  }

  async findOne(id: number): Promise<Band | null> {
    return await this.bandRepository.findOne(id);
  }

  async createBand(data: CreateBandGQL): Promise<Band> {
    return await this.bandRepository.createBand(data);
  }

  async editBand(data: EditBandGQL): Promise<Band | null> {
    return await this.bandRepository.editBand(data);
  }

  async deleteBand(id: number): Promise<boolean> {
    return await this.bandRepository.deleteBand(id);
  }
}
