import { Injectable } from '@nestjs/common';

//Could be reaching out to a database, logic for your controllers
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
