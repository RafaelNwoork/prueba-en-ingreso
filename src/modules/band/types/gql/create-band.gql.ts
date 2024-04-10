import { Field, InputType } from '@nestjs/graphql';
import { CreateBandMemberGQL } from './create-band-member.gql';

@InputType()
export class CreateBandGQL {
  @Field()
  name: string;

  @Field()
  genre: string;

  @Field()
  country: string;

  @Field({ defaultValue: true })
  active: boolean;

  @Field(() => [CreateBandMemberGQL], { nullable: true })
  members: CreateBandMemberGQL[];
}
