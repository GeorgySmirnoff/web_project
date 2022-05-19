import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { MessageEntity } from './message.entity';

@Injectable()
export class GatewayService {
  constructor(private readonly dbService: PrismaService) {}

  async save(name: string, text: string) {
    const message = new MessageEntity();
    message.name = name;
    message.text = text;

    await this.dbService.message.create(message);
  }

  async getMessages() {
    return await this.dbService.message.findMany();
  }
}
