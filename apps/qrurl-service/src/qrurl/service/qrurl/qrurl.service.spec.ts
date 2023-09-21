import { Test, TestingModule } from '@nestjs/testing';
import { QrurlService } from './qrurl.service';

describe('QrurlService', () => {
  let service: QrurlService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [QrurlService],
    }).compile();

    service = module.get<QrurlService>(QrurlService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
