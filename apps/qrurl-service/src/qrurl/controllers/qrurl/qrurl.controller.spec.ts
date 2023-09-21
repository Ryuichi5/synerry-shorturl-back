import { Test, TestingModule } from '@nestjs/testing';
import { QrurlController } from './qrurl.controller';

describe('QrurlController', () => {
  let controller: QrurlController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [QrurlController],
    }).compile();

    controller = module.get<QrurlController>(QrurlController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
