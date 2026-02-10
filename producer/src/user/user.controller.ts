import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import * as path from 'path';
import * as fs from 'fs';

interface User {
  id: number;
  name: string;
  age: number;
}

@Controller()
export class UserController {
  @GrpcMethod('UserService', 'GetFilteredUsers')
  getFilteredUsers(): { users: User[] } {
    const filePath = path.join(__dirname, '../data/users.json');
    const raw = fs.readFileSync(filePath, 'utf-8');
    const users: User[] = JSON.parse(raw);
    const filtered = users.filter((user) => user.age > 18);
    console.log(`Returning ${filtered.length} filtered users`);
    return { users: filtered };
  }
}
