import { Controller, Get, OnApplicationBootstrap } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('users')
export class UserController implements OnApplicationBootstrap {
  constructor(private readonly userService: UserService) {}

  async onApplicationBootstrap() {
    await this.fetchAndLogUsers();
  }

  @Get()
  async getFilteredUsers() {
    return this.fetchAndLogUsers();
  }

  private async fetchAndLogUsers() {
    const result = await this.userService.getFilteredUsers();
    console.log('Filtered Users:', JSON.stringify(result.users, null, 2));
    return result.users;
  }
}
