import { Test, TestingModule } from '@nestjs/testing';
import { TestServerController } from './test-server.controller';
import { TestServerService } from './test-server.service';

describe('TestServerController', () => {
  let testServerController: TestServerController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [TestServerController],
      providers: [TestServerService],
    }).compile();

    testServerController = app.get<TestServerController>(TestServerController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(testServerController.getHello()).toBe('Hello World!');
    });
  });
});
