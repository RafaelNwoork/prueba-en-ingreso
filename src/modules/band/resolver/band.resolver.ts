import { Query, Resolver } from '@nestjs/graphql';
import { BandService } from '../service/band.service';
import { GetBandOutputGQL } from '../types/gql/get-bands-output.gql';

@Resolver()
export class BandResolver {
  constructor(private bandService: BandService) {}

  @Query(() => GetBandOutputGQL)
  async getBands(): Promise<GetBandOutputGQL> {
    return this.bandService.findAll();
  }
}
