import { Injectable, NotFoundException } from '@nestjs/common';
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

    // async findOne(id: string): Promise<Shorturl | undefined> {
    //   return this.shorturl.findOne({ short_url: id });
    // }

    async findRandomString(id: string): Promise<Shorturl | undefined> {
      return this.shorturl.findOne({ where: { short_url: id } });
    }
  
    async update(id: number, data: Partial<Shorturl>): Promise<void> {
      const shortUrl = await this.shorturl.findOne({ where: { id: id } });
      if (!shortUrl) {
        throw new NotFoundException('Short URL not found');
      }
      
      await this.shorturl.update(id, data);
    }


      // Add a new method to find short URLs by user ID
  async findShortUrlsByUserId(userId: number): Promise<Shorturl[]> {
    return this.shorturl.find({ where: { user_id: userId } });
  }

    async createQrurl(createShorturlDto: CreateShorturlDto): Promise<Shorturl> {
        try {
            const newUser = this.shorturl.create(createShorturlDto);
            return this.shorturl.save(newUser);
        } catch (error) {    
        }
      }
      

      async createShortUrl(createShortUrlDto: CreateShorturlDto): Promise<Shorturl> {
        const {full_url , user_id}  = createShortUrlDto;

        // Generate a short URL (you can implement your own logic here)
        const short_url = this.generateShortUrl();
    
        const shortUrlEntity = this.shorturl.create({
            full_url,
            short_url,
            user_id
        });
    
        return this.shorturl.save(shortUrlEntity);
      }
      
      async getOriginalUrl(randomString: string): Promise<string | null> {
        const shortUrl = await this.shorturl.findOne({ where: { short_url: randomString } });
    
        if (!shortUrl) {
          throw new NotFoundException('Short URL not found Hee');
        }
    
        return shortUrl.full_url;
      }

      private generateShortUrl(length: number = 6): string {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let shortUrl = '';
      
        for (let i = 0; i < length; i++) {
          const randomIndex = Math.floor(Math.random() * characters.length);
          shortUrl += characters.charAt(randomIndex);
        }
      
        return shortUrl;
      }
    
}
