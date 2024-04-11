import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { BandService } from '../service/band.service';
import { GetBandOutputGQL } from '../../types/gql/get-bands-output.gql';
import { GetBandInputGQL } from '../../types/gql/get-bands-input.gql';
import { BandGQL } from 'shared/types/gql/band.gql';
import { CreateBandGQL as CreateBandInputGQL } from '../../types/gql/create/band.gql';
import { EditBandGQL } from '../../types/gql/edit/band-input.gql';
import { Band } from 'infraestructure/db/sql/entities/band.entity';

@Resolver(() => BandGQL)
export class BandResolver {
  constructor(private bandService: BandService) {}

  @Query(() => GetBandOutputGQL)
  async getBands(): Promise<GetBandOutputGQL> {
    return this.bandService.findAll();
  }

  @Query(() => GetBandInputGQL, { nullable: true })
  async getBandById(
    @Args('id', { type: () => Int }) id: number,
  ): Promise<GetBandInputGQL | null> {
    return this.bandService.findOne(id);
  }

  @Mutation(() => BandGQL)
  async createBand(
    @Args('createBandData') createBandData: CreateBandInputGQL,
  ): Promise<Band> {
    return this.bandService.createBand(createBandData);
  }

  @Mutation(() => GetBandInputGQL)
  async editBand(
    @Args('editBandData') editBandData: EditBandGQL,
  ): Promise<GetBandInputGQL | null> {
    return this.bandService.editBand(editBandData);
  }

  @Mutation(() => Boolean)
  async deleteBand(@Args('id') bandId: number): Promise<boolean> {
    return this.bandService.deleteBand(bandId);
  }
}
