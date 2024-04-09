import { Query, Resolver } from '@nestjs/graphql';
import { Band } from '../types/gql/band.gql';

@Resolver(() => Band)
export class BandResolver {
  /**
   * query sayHello {
   *  sayHello
   * }
   */
  @Query(() => String)
  sayHello(): string {
    return 'Hello World';
  }
}
