import { PartialType } from '@nestjs/mapped-types';
import { CreateSubjectDto } from './create-subject.dto';

export class UpdateGroupDto extends PartialType(CreateSubjectDto) {}
