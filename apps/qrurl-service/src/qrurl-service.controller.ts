import { Controller, Get } from '@nestjs/common';
import { QrurlServiceService } from './qrurl-service.service';

@Controller()
export class QrurlServiceController {
  constructor(private readonly qrurlServiceService: QrurlServiceService) {}

  @Get()
  getHello(): string {
    return this.qrurlServiceService.getHello();
  }
}
