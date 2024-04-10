import { Field, ID, ObjectType } from '@nestjs/graphql';
import { BandMember } from './band-member.gql';

@ObjectType()
export class Band {
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

  @Field(() => [BandMember])
  members: BandMember[];
}
