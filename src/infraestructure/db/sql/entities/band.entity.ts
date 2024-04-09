import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { BandMember } from './band-member.entity';

@Entity()
export class Band {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  genre: string;

  @Column()
  country: string;

  @Column()
  active: boolean;

  @OneToMany(() => BandMember, (band_member) => band_member.band)
  members: BandMember[];
}
