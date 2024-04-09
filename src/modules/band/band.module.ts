import { Module } from '@nestjs/common';
import { BandResolver } from './resolver/band.resolver';

@Module({
  providers: [BandResolver],
})
export class BandModule {}
