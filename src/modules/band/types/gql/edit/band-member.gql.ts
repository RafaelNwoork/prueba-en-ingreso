import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class EditBandMemberGQL {
  @Field(() => Int)
  id: number;

  @Field({ nullable: true })
  name?: string;

  @Field({ nullable: true })
  role?: string;
}
