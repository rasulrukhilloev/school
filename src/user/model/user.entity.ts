import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  ManyToMany,
} from 'typeorm';
import { Assessment } from 'src/assessment/model/assessment.entity';
import { Group } from 'src/group/model/group.entity';

export enum UserRoles {
  STUDENT = 'student',
  TEACHER = 'teacher',
  DIRECTOR = 'director',
}

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column({ type: 'enum', enum: UserRoles }) //default: Role.STUDENT
  role: string;

  @ManyToMany(() => Group, (group) => group.students)
  studentGroups: Group[];

  @ManyToMany(() => Group, (group) => group.teachers)
  teacherGroups: Group[];

  @OneToMany(() => Assessment, (assessment) => assessment.student)
  assessments: Assessment[];
}
