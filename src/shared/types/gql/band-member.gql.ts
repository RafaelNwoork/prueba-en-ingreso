import { Field, ID, ObjectType } from '@nestjs/graphql';
import { BandGQL } from './band.gql';

@ObjectType()
export class BandMemberGQL {
  @Field(() => ID)
  id: number;

  @Field()
  name: string;

  @Field()
  role: string;

  @Field(() => BandGQL)
  band: BandGQL;
}
