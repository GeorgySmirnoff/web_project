import { Module } from '@nestjs/common';

import { CategoryController } from './item-category.controller';
import { CategoryService } from './item-category.service';
import { PrismaService } from '../prisma.service';

@Module({
  controllers: [CategoryController],
  providers: [CategoryService, PrismaService],
})
export class CategoryModule {}
