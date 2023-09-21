import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Shorturl } from 'apps/shorturl-service/src/typeorm/entities/Shorturl.entity';
import { Repository } from 'typeorm';
import { CreateShorturlDto } from '../../dto/create-shorturl.dto';

@Injectable()
export class ShorturlService {

    constructor(@InjectRepository(Shorturl) private shorturl: Repository<Shorturl>) {}

    async findAll(): Promise<Shorturl[]> {
      return this.shorturl.find();
    }

    async createQrurl(createShorturlDto: CreateShorturlDto): Promise<Shorturl> {
        try {
            const newUser = this.shorturl.create(createShorturlDto);
            return this.shorturl.save(newUser);
        } catch (error) {    
        }
      }
    
}
