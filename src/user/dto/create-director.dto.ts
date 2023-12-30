import { OmitType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';

export class CreateDirectorDto extends OmitType(CreateUserDto, [
  'role',
] as const) {}
