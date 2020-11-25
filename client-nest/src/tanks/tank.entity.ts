import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Tank {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ default: 0 })
  x: number;

  @Column({ default: 0 })
  y: number;

  @Column({ default: 'right' })
  direction: 'left' | 'right' | 'top' | 'bottom';
}
