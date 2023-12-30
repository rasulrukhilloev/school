import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from 'typeorm';
import { Group } from 'src/group/model/group.entity';

@Entity()
export class Subject {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToMany(() => Group, (group) => group.subjects)
  groups: Group[];
}
