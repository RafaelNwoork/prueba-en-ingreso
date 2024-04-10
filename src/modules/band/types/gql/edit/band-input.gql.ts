import { Field, InputType, Int } from '@nestjs/graphql';
import { EditBandMemberGQL } from './band-member.gql';

@InputType()
export class EditBandGQL {
  @Field(() => Int)
  id: number;

  @Field({ nullable: true })
  name?: string;

  @Field({ nullable: true })
  genre?: string;

  @Field({ nullable: true })
  country?: string;

  @Field({ nullable: true })
  active?: boolean;

  @Field(() => [EditBandMemberGQL], { nullable: true })
  members?: EditBandMemberGQL[];
}
