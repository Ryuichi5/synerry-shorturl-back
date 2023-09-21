import { Controller, Get } from '@nestjs/common';
import { ShorturlServiceService } from './shorturl-service.service';

@Controller()
export class ShorturlServiceController {
  constructor(private readonly shorturlServiceService: ShorturlServiceService) {}

  @Get()
  getHello(): string {
    return this.shorturlServiceService.getHello();
  }
}
