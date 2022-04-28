import {
  Get,
  Post,
  Delete,
  Param,
  Controller,
  NotImplementedException,
  Body,
  ParseIntPipe,
  Patch,
} from '@nestjs/common';

import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { SaleService } from './sale.service';
import { SaleCreateDto } from './dto/sale.create.dto';
import { SaleUpdateDto } from './dto/sale.update.dto';
import { Sale } from '@prisma/client';

@ApiTags('sale')
@Controller('sale')
@ApiTags('sale')
@Controller('sale')
export class SaleController {
  constructor(private readonly saleService: SaleService) {}

  @ApiOperation({
    summary: 'Get Sale',
  })
  @ApiResponse({
    status: 200,
    description: 'Sale is found.',
  })
  @ApiResponse({
    status: 404,
    description: 'Sale is not found.',
  })
  @Get(':id')
  async getSaleById(@Param('id', ParseIntPipe) id: number): Promise<Sale> {
    return this.saleService.getSaleById({ id: id });
  }

  @ApiOperation({
    summary: 'Add new sale',
  })
  @ApiResponse({
    status: 200,
    description: 'Sale is added.',
  })
  @ApiResponse({
    status: 404,
    description: 'Not found',
  })
  @Post()
  async addSale(@Body() saleCreteDto: SaleCreateDto): Promise<Sale> {
    return this.saleService.addSale(saleCreteDto);
  }

  @ApiOperation({
    summary: 'Delete sale by id.r',
  })
  @ApiResponse({
    status: 200,
    description: 'Sale is deleted.',
  })
  @ApiResponse({
    status: 404,
    description: 'Not found',
  })
  @Delete(':id')
  async deleteSaleById(@Param('id', ParseIntPipe) id: number): Promise<Sale> {
    return this.saleService.deleteSaleById({ id: id });
  }

  @ApiOperation({
    summary: 'Get all sales',
  })
  @ApiResponse({
    status: 200,
    description: 'Sale is deleted.',
  })
  @Get()
  async getAll(): Promise<Sale[]> {
    return this.saleService.getAll();
  }

  @ApiOperation({
    summary: 'Update sale',
  })
  @Patch('update/:id')
  async updateSaleById(
    @Param('id', ParseIntPipe) id: number,
    @Body() saleUpdateDto: SaleUpdateDto,
  ): Promise<Sale> {
    return this.saleService.updateSaleById({ id: id }, saleUpdateDto);
  }
}
