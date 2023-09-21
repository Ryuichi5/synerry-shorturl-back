import { Test, TestingModule } from '@nestjs/testing';
import { QrurlServiceController } from './qrurl-service.controller';
import { QrurlServiceService } from './qrurl-service.service';

describe('QrurlServiceController', () => {
  let qrurlServiceController: QrurlServiceController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [QrurlServiceController],
      providers: [QrurlServiceService],
    }).compile();

    qrurlServiceController = app.get<QrurlServiceController>(QrurlServiceController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(qrurlServiceController.getHello()).toBe('Hello World!');
    });
  });
});
