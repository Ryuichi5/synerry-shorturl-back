import { Injectable } from '@nestjs/common';

@Injectable()
export class TestServerService {
  getHello(): string {
    return 'Hello World!';
  }
}
