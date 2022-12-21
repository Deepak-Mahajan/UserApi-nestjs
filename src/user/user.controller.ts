import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { User } from './data/user.dto';
import { UserService } from './user.service';

@Controller('/user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post('/add')
  createUser(@Body() user: User): string {
    return this.userService.addUserService(user);
  }

  @Get('/findAll')
  getAllUser(): User[] {
    return this.userService.findAllUserService();
  }

  @Put('/update')
  updateUser(@Body() user: User): string {
    return this.userService.updateUserService(user);
  }

  @Delete('/delete/:id')
  deleteUser(@Param('id') userId: string): string {
    return this.userService.deleteUserService(userId);
  }
}
