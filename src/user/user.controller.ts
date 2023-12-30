import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { UserService } from './user.service';
import { User, UserRoles } from './model/user.entity';
import { CreateDirectorDto, CreateUserDto, UpdateUserDto } from './dto';
import { Roles } from 'src/auth/decorator/roles.decorator';
import { JwtAuthGuard, RolesGuard } from 'src/auth/guards';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('director')
  async createDirector(
    @Body() createDirectorDto: CreateDirectorDto,
  ): Promise<User> {
    return this.userService.createDirector(createDirectorDto);
  }

  @Post()
  @Roles(UserRoles.DIRECTOR)
  @UseGuards(JwtAuthGuard, RolesGuard)
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Get()
  @Roles(UserRoles.DIRECTOR)
  @UseGuards(JwtAuthGuard, RolesGuard)
  findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  @Roles(UserRoles.DIRECTOR)
  @UseGuards(JwtAuthGuard, RolesGuard)
  findOne(@Param('id') id: string) {
    return this.userService.findOne(+id);
  }

  @Put(':id')
  @Roles(UserRoles.DIRECTOR)
  @UseGuards(JwtAuthGuard, RolesGuard)
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto);
  }

  @Delete(':id')
  @Roles(UserRoles.DIRECTOR)
  @UseGuards(JwtAuthGuard, RolesGuard)
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }
}
