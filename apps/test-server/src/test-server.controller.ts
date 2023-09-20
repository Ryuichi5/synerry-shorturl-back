import { Controller, Get } from '@nestjs/common';
import { TestServerService } from './test-server.service';

@Controller()
export class TestServerController {
  constructor(private readonly testServerService: TestServerService) {}

  @Get()
  getHello(): string {
    return this.testServerService.getHello();
  }
}
