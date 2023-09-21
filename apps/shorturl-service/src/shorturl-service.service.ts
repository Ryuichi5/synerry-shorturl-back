import { Injectable } from '@nestjs/common';

@Injectable()
export class ShorturlServiceService {
  getHello(): string {
    return 'Hello World!';
  }
}
