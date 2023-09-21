import { Injectable } from '@nestjs/common';

@Injectable()
export class QrurlServiceService {
  getHello(): string {
    return 'Hello World!';
  }
}
