import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { Subject } from 'src/subject/model/subject.entity';
import { User } from 'src/user/model/user.entity';

@Entity()
export class Group {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToMany(() => User, (user) => user.studentGroups)
  @JoinTable()
  students: User[];

  @ManyToMany(() => User, (user) => user.teacherGroups)
  @JoinTable()
  teachers: User[];

  @ManyToMany(() => Subject)
  @JoinTable()
  subjects: Subject[];
}
