import { Field, ID, ObjectType } from '@nestjs/graphql';
import { BandMemberGQL } from './band-member.gql';

@ObjectType()
export class BandGQL {
  @Field(() => ID)
  id: number;

  @Field()
  name: string;

  @Field()
  genre: string;

  @Field()
  country: string;

  @Field()
  active: boolean;

  @Field(() => [BandMemberGQL])
  members: BandMemberGQL[];
}
