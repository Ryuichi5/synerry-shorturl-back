import { Body, Controller, Get , Post } from '@nestjs/common';
import { Shorturl } from 'apps/shorturl-service/src/typeorm/entities/Shorturl.entity';
import { ShorturlService } from '../../service/shorturl/shorturl.service';
import { CreateShorturlDto } from '../../dto/create-shorturl.dto';


@Controller('shorturl')
export class ShorturlController {
    constructor(private readonly ShorturlService: ShorturlService) {}

    @Get()
    async getUsers(): Promise<Shorturl[]> {
      return this.ShorturlService.findAll();
    }

    @Post()
    async createUser(@Body() createQrurlDto: CreateShorturlDto): Promise<Shorturl> {
      return this.ShorturlService.createQrurl(createQrurlDto);
    }

}
