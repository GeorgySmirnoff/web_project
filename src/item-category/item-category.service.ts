import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { ItemCategory, Prisma } from '@prisma/client';

@Injectable()
export class CategoryService {
  constructor(private readonly prismaService: PrismaService) {}

  public async addCategory(
    data: Prisma.ItemCategoryCreateInput,
  ): Promise<ItemCategory> {
    return this.prismaService.itemCategory.create({ data });
  }

  public async getCategoryById(
    id: Prisma.SaleWhereUniqueInput,
  ): Promise<ItemCategory | null> {
    const categoryNum = await this.prismaService.itemCategory.count({
      where: id,
    });
    if (categoryNum == 0) {
      throw new NotFoundException('Category not found');
    }

    return this.prismaService.itemCategory.findFirst({ where: id });
  }

  public async getAll(): Promise<ItemCategory[] | null> {
    return this.prismaService.itemCategory.findMany();
  }

  public async deleteCategoryById(
    id: Prisma.SaleWhereUniqueInput,
  ): Promise<ItemCategory> {
    return this.prismaService.itemCategory.delete({ where: id });
  }

  public async updateCategoryById(
    id: Prisma.ItemCategoryWhereUniqueInput,
    data: Prisma.ItemCategoryUpdateInput,
  ): Promise<ItemCategory> {
    const params = { where: id, data };

    return this.prismaService.itemCategory.update(params);
  }
}
