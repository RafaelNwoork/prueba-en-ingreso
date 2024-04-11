import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { BandMembers } from './band-member.entity';

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

  @OneToMany(() => BandMembers, (band_members) => band_members.band, {
    eager: true,
    onDelete: 'CASCADE',
  })
  members: BandMembers[];
}
