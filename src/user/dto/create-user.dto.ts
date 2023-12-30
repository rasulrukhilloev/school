import {
  // IsEnum,
  IsIn,
  IsNotEmpty,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';
import { UserRoles } from '../model/user.entity';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  username: string;

  @IsString()
  @MinLength(4)
  @MaxLength(20)
  password: string;

  // @IsEnum(UserRoles)
  @IsIn([UserRoles.TEACHER, UserRoles.STUDENT])
  role: UserRoles;
}
