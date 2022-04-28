import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { SaleCreateDto } from './dto/sale.create.dto';
import { PrismaService } from '../prisma.service';
import { Prisma, Sale } from '@prisma/client';

@Injectable()
export class SaleService {
  constructor(private readonly prismaService: PrismaService) {}

  public async addSale(data: Prisma.SaleCreateInput): Promise<Sale> {
    return this.prismaService.sale.create({ data });
  }

  public async getSaleById(
    id: Prisma.SaleWhereUniqueInput,
  ): Promise<Sale | null> {
    const salesNum = await this.prismaService.sale.count({
      where: id,
    });

    if (salesNum == 0) {
      throw new HttpException(
        { status: HttpStatus.NOT_FOUND, error: 'Sale not found' },
        HttpStatus.NOT_FOUND,
      );
    }

    return this.prismaService.sale.findFirst({ where: id });
  }

  public async getAll(): Promise<Sale[] | null> {
    return this.prismaService.sale.findMany();
  }

  public async deleteSaleById(id: Prisma.SaleWhereUniqueInput): Promise<Sale> {
    return this.prismaService.sale.delete({ where: id });
  }

  public async updateSaleById(
    id: Prisma.SaleWhereUniqueInput,
    data: Prisma.SaleUpdateInput,
  ): Promise<Sale> {
    const params = { where: id, data };

    return this.prismaService.sale.update(params);
  }
}
