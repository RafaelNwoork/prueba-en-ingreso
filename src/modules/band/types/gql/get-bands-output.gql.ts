import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Band } from 'infraestructure/db/sql/entities/band.entity';
import { Band as BandGQL } from 'shared/types/gql/band.gql';

@ObjectType()
export class GetBandOutputGQL {
  @Field(() => [BandGQL])
  bands: Band[];

  @Field(() => Int)
  len: number;
}
