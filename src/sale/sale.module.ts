import { Module } from '@nestjs/common';

import { SaleController } from './sale.controller';
import { SaleService } from './sale.service';
import { PrismaService } from '../prisma.service';

@Module({
  controllers: [SaleController],
  providers: [SaleService, PrismaService],
})
export class SaleModule {}
