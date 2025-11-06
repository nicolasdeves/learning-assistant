import { Controller, Get, Param } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('communities')
export class UserController {
  constructor(
    private readonly userService: UserService,
  ) {}

}
