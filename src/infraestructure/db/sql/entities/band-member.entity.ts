import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Band } from './band.entity';

@Entity()
export class BandMember {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  role: string;

  @ManyToOne(() => Band, (band) => band.members)
  band: Band;
}
