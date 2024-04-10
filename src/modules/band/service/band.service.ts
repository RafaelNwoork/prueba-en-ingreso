import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Band } from 'infraestructure/db/sql/entities/band.entity';
import { Repository } from 'typeorm';
import { GetBandOutputGQL } from '../types/gql/get-bands-output.gql';
import { GetBandInputGQL } from '../types/gql/get-bands-input.gql';
import { CreateBandGQL } from '../types/gql/create/band.gql';
import { BandGQL } from 'shared/types/gql/band.gql';
import { BandMembers } from 'infraestructure/db/sql/entities/band-member.entity';

@Injectable()
export class BandService {
  constructor(
    @InjectRepository(Band) private bandRepository: Repository<Band>,
    @InjectRepository(BandMembers)
    private membersRepository: Repository<BandMembers>,
  ) {}

  async findAll(): Promise<GetBandOutputGQL> {
    const bands = await this.bandRepository.find();
    return Promise.resolve({ bands: bands, len: bands.length });
  }

  async findOne(id: number): Promise<GetBandInputGQL | null> {
    return this.bandRepository.findOneBy({ id });
  }

  async createBand(data: CreateBandGQL): Promise<BandGQL> {
    const { name, genre, country, active } = data;

    return this.bandRepository
      .save({ name, genre, country, active })
      .then(async (band) => {
        // Esto es necesario para que los miembros tengan
        // la ID de la banda recién creada.
        const members = data.members.map((member) => ({
          ...member,
          band,
        }));

        // Le agrego los miembros creados al objeto de la banda.
        band.members = await this.membersRepository.save(members);

        return band;
      });
  }
}