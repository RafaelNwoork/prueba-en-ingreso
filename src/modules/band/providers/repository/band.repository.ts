import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BandMembers } from 'infraestructure/db/sql/entities/band-member.entity';
import { Band } from 'infraestructure/db/sql/entities/band.entity';
import { CreateBandGQL } from 'modules/band/types/gql/create/band.gql';
import { EditBandGQL } from 'modules/band/types/gql/edit/band-input.gql';
import { GetBandInputGQL } from 'modules/band/types/gql/get-bands-input.gql';
import { GetBandOutputGQL } from 'modules/band/types/gql/get-bands-output.gql';
import { BandGQL } from 'shared/types/gql/band.gql';
import { Repository } from 'typeorm';

@Injectable()
export class BandRepository {
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

  async createBand(inputData: CreateBandGQL): Promise<Band> {
    const { name, genre, country, active } = inputData;

    const band = await this.bandRepository.save({
      name,
      genre,
      country,
      active,
    });

    // Esto es necesario para que los miembros tengan
    // la ID de la banda recién creada.
    const members = inputData.members.map((member) => ({
      ...member,
      band,
    }));

    // Le agrego los miembros creados al objeto de la banda.
    band.members = await this.membersRepository.save(members);

    return band;
  }

  async editBand(data: EditBandGQL): Promise<BandGQL | null> {
    const { name, genre, country, active, members } = data;

    return this.bandRepository
      .update({ id: data.id }, { name, genre, country, active })
      .then((band) => {
        members?.forEach((member) =>
          this.membersRepository.update(
            { id: member.id },
            { name: member.name, role: member.role },
          ),
        );

        return band;
      })
      .then(() => {
        const band = this.bandRepository.findOneBy({ id: data.id });

        return band;
      });
  }

  async deleteBand(id: number): Promise<boolean> {
    return this.bandRepository
      .delete(id)
      .then(
        (result) =>
          result.affected !== null &&
          result.affected !== undefined &&
          result.affected !== 0,
      );
  }
}
