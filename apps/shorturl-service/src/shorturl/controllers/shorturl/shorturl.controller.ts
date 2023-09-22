import { Body, Controller, Get , NotFoundException, Param, ParseIntPipe, Post, Redirect } from '@nestjs/common';
import { Shorturl } from 'apps/shorturl-service/src/typeorm/entities/Shorturl.entity';
import { ShorturlService } from '../../service/shorturl/shorturl.service';
import { CreateShorturlDto } from '../../dto/create-shorturl.dto';
import { ResponseRequiredObject } from 'apps/shorturl-service/helpers/response-required-object.helper';


@Controller('shorturl')
export class ShorturlController {
    constructor(private readonly ShorturlService: ShorturlService) {}

    @Get()
    async getUsers(): Promise<Shorturl[]> {
      return this.ShorturlService.findAll();
    }
  
    @Get('users/:user_id')
    async getShortUrlsByUserId(@Param('user_id', ParseIntPipe) userId: number) {
      return this.ShorturlService.findShortUrlsByUserId(userId);
    }

    @Post()
    async createUser(@Body() createQrurlDto: CreateShorturlDto): Promise<Shorturl> {
      return this.ShorturlService.createShortUrl(createQrurlDto);
    }

    @Get(':randomString')
    async redirectToOriginalUrl(@Param('randomString') randomString: string) {
      const originalUrl = await this.ShorturlService.getOriginalUrl(randomString);
      
      console.log(originalUrl)

      if (!originalUrl) {
        throw new NotFoundException('Short URL not found Yai');
      }

      const repsonseData : ResponseRequiredObject = {
        status : true
        ,message : "ok"
        ,data : {
          originalUrl
        }
      };
  
      return repsonseData;
    }


}
