import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Band } from './band.gql';

@ObjectType()
export class BandMember {
  @Field(() => ID)
  id: number;

  @Field()
  name: string;

  @Field()
  role: string;

  @Field(() => Band)
  band: Band;
}
