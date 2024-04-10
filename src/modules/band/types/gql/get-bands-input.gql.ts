import { Field, ObjectType } from '@nestjs/graphql';

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
}
