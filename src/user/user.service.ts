import { Injectable } from '@nestjs/common';
import { User } from './data/user.dto';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class UserService {
  users: User[] = [];

  // add user
  addUserService(user: User): string {
    user.id = uuidv4();
    this.users.push(user);
    return 'New User Added !';
  }

  // find user
  findAllUserService(): User[] {
    return this.users;
  }

  // update user
  updateUserService(user: User): string {
    let index = this.users.findIndex(
      (currentUser) => currentUser.id === user.id,
    );
    this.users[index] = user;
    return 'User updated !';
  }

  // delete user
  deleteUserService(userId: string): string {
    this.users = this.users.filter((user) => user.id !== userId);
    return 'User deleted successfully !';
  }
}
