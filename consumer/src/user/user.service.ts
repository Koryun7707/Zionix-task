import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { firstValueFrom, Observable } from 'rxjs';

export interface User {
  id: number;
  name: string;
  age: number;
}

export interface UserList {
  users: User[];
}

interface UserServiceGrpc {
  getFilteredUsers(data: {}): Observable<UserList>;
}

@Injectable()
export class UserService implements OnModuleInit {
  private userServiceGrpc: UserServiceGrpc;

  constructor(@Inject('USER_PACKAGE') private client: ClientGrpc) {}

  onModuleInit() {
    this.userServiceGrpc =
      this.client.getService<UserServiceGrpc>('UserService');
  }

  async getFilteredUsers(): Promise<UserList> {
    return firstValueFrom(this.userServiceGrpc.getFilteredUsers({}));
  }
}
