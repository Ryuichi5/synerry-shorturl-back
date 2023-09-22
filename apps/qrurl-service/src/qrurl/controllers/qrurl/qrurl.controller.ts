import { Qrurl } from 'apps/qrurl-service/src/typeorm/entities/Qrurl.entity';
import { QrurlService } from '../../service/qrurl/qrurl.service';
import { Body, Controller, Get , Param, ParseIntPipe, Post } from '@nestjs/common';
import { CreateQrurlDto } from '../../dto/create-qrurl.dto';

@Controller('qrurl')
export class QrurlController {
    constructor(private readonly QrurlService: QrurlService) {}

    @Get()
    async getUsers(): Promise<Qrurl[]> {
      return this.QrurlService.findAll();
    }

    @Get('users/:user_id')
    async getQrshortByUserId(@Param('user_id', ParseIntPipe) userId: number) {
      return this.QrurlService.findShortUrlsByUserId(userId);
    }

    @Post()
    async createUser(@Body() createQrurlDto: CreateQrurlDto): Promise<Qrurl> {
      return this.QrurlService.createQrurl(createQrurlDto);
    }
}
