import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Subject } from 'src/subject/model/subject.entity';
import { User } from 'src/user/model/user.entity';

@Entity()
export class Assessment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  grade: number;

  @ManyToOne(() => User, (user) => user.assessments)
  student: User;

  @ManyToOne(() => User)
  teacher: User;

  @ManyToOne(() => Subject)
  subject: Subject;
}
