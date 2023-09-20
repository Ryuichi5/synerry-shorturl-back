import { Module } from '@nestjs/common';
import { TestServerController } from './test-server.controller';
import { TestServerService } from './test-server.service';

@Module({
  imports: [],
  controllers: [TestServerController],
  providers: [TestServerService],
})
export class TestServerModule {}
