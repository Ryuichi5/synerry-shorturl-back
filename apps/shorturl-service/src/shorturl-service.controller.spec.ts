import { Test, TestingModule } from '@nestjs/testing';
import { ShorturlServiceController } from './shorturl-service.controller';
import { ShorturlServiceService } from './shorturl-service.service';

describe('ShorturlServiceController', () => {
  let shorturlServiceController: ShorturlServiceController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [ShorturlServiceController],
      providers: [ShorturlServiceService],
    }).compile();

    shorturlServiceController = app.get<ShorturlServiceController>(ShorturlServiceController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(shorturlServiceController.getHello()).toBe('Hello World!');
    });
  });
});
