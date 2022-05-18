import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { ItemCreateDto } from './dto/item.create.dto';
import { PrismaService } from '../prisma.service';
import { Prisma, Item } from '@prisma/client';

@Injectable()
export class ItemService {
  constructor(private readonly prismaService: PrismaService) {}

  public async addItem(data: Prisma.ItemCreateInput): Promise<Item> {
    return this.prismaService.item.create({ data });
  }

  public async getItemById(
    id: Prisma.ItemWhereUniqueInput,
  ): Promise<Item | null> {
    const itemsNum = await this.prismaService.item.count({
      where: id,
    });

    if (itemsNum == 0) {
      throw new NotFoundException('Item not found');
    }

    return this.prismaService.item.findFirst({ where: id });
  }

  // public async getAll(): Promise<Item[] | null> {
  //   return this.prismaService.item.findMany();
  // }

  public async deleteItemById(id: Prisma.ItemWhereUniqueInput): Promise<Item> {
    return this.prismaService.item.delete({ where: id });
  }

  public async updateItemById(
    id: Prisma.ItemWhereUniqueInput,
    data: Prisma.ItemUpdateInput,
  ): Promise<Item> {
    const params = { where: id, data };

    return this.prismaService.item.update(params);
  }
}
