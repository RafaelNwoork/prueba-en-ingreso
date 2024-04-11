import { Module } from '@nestjs/common';
import { BandResolver } from './providers/resolver/band.resolver';
import { BandService } from './providers/service/band.service';
import { BandRepository } from './providers/repository/band.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Band } from 'infraestructure/db/sql/entities/band.entity';
import { BandMembers } from 'infraestructure/db/sql/entities/band-member.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Band, BandMembers])],

  providers: [BandRepository, BandResolver, BandService],
})
export class BandModule {}
