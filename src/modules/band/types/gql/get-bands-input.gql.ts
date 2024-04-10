import { Field, ObjectType } from '@nestjs/graphql';
import { BandMemberGQL } from 'shared/types/gql/band-member.gql';

@ObjectType()
export class GetBandInputGQL {
  @Field({ nullable: true })
  id: number;

  @Field({ nullable: true })
  name: string;

  @Field({ nullable: true })
  genre: string;

  @Field({ nullable: true })
  country: string;

  @Field({ nullable: true })
  active: boolean;

  @Field(() => [BandMemberGQL], { nullable: true })
  members: BandMemberGQL[];
}
