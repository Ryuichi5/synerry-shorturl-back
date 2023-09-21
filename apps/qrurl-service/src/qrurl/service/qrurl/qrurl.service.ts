import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Qrurl } from 'apps/qrurl-service/src/typeorm/entities/Qrurl.entity';
import { Repository } from 'typeorm';
import { CreateQrurlDto } from '../../dto/create-qrurl.dto';

@Injectable()
export class QrurlService {

    constructor(@InjectRepository(Qrurl) private qrurl: Repository<Qrurl>) {}

    async findAll(): Promise<Qrurl[]> {
      return this.qrurl.find();
    }

    async createQrurl(createQrurlDto: CreateQrurlDto): Promise<Qrurl> {
        try {
            const newUser = this.qrurl.create(createQrurlDto);
            return this.qrurl.save(newUser);
        } catch (error) {    
        }
      }

}
