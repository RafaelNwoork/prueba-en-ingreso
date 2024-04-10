import { Args, Int, Query, Resolver } from '@nestjs/graphql';
import { BandService } from '../service/band.service';
import { GetBandOutputGQL } from '../types/gql/get-bands-output.gql';
import { GetBandInputGQL } from '../types/gql/get-bands-input.gql';
import { BandGQL } from 'shared/types/gql/band.gql';

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
}
