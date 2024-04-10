import { Module } from '@nestjs/common';
import { BandResolver } from './resolver/band.resolver';
import { BandService } from './service/band.service';
import { BandRepository } from './repository/band.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Band } from 'infraestructure/db/sql/entities/band.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Band])],
  providers: [BandRepository, BandResolver, BandService],
})
export class BandModule {}
