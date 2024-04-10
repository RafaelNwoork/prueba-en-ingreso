import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class CreateBandMemberGQL {
  @Field()
  name: string;

  @Field()
  role: string;

  @Field(() => Int, { nullable: true })
  bandId: number;
}
