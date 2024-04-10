import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SQLCredentials } from 'infraestructure/db/sql/data-source';
import { BandModule } from 'modules/band/band.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(SQLCredentials),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
    }),
    BandModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
