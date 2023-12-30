import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { ROLES_KEY } from '../decorator/roles.decorator';
import { UserRoles } from 'src/user/model/user.entity';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const requiredRole = this.reflector.get<UserRoles>(
      ROLES_KEY,
      context.getHandler(), //, context.getClass()
      //TODO remove explanation later
      // getHandler - endpoint-request-level, getClass - controller-class-level
    );

    if (!requiredRole) {
      return true;
    }
    const { user } = context.switchToHttp().getRequest();
    return requiredRole.includes(user.role);
  }
}
