import {
  ExecutionContext,
  HttpException,
  HttpStatus,
  Injectable,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  constructor() {
    super();
  }
  canActivate(context: ExecutionContext) {
    // TODO additional logic here
    return super.canActivate(context);
  }

  handleRequest(err, user) {
    //info
    //TODO add custom errors like token-expired, forbidden resource etc..
    // if (info instanceof jwt.TokenExpiredError) {
    //   throw new HttpException('Token expired', HTTP_STATUS_TOKEN_EXPIRED);
    // }

    if (err || !user) {
      throw new HttpException(
        {
          status: HttpStatus.UNAUTHORIZED,
          error: 'Unauthorized user',
        },
        HttpStatus.UNAUTHORIZED,
      );
    }

    return user;
  }
}
