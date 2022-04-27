import {
  Get,
  Post,
  Delete,
  Param,
  Controller,
  Patch,
  NotImplementedException,
} from '@nestjs/common';

import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { SaleService } from './sale.service';
import { SaleRO } from './sale.interface';

@ApiTags('sale')
@Controller('sale')
export class SaleController {
  constructor(private readonly memberService: SaleService) {}

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
  async getItem(@Param('id') id: number): Promise<SaleRO> {
    throw new NotImplementedException();
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
  @Post(':name')
  async addSale(@Param('name') name: string): Promise<SaleRO> {
    throw new NotImplementedException();
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
  async deleteSale(@Param('id') id: number): Promise<SaleRO> {
    throw new NotImplementedException();
  }

  @ApiOperation({
    summary: 'Get all sales',
  })
  @ApiResponse({
    status: 200,
    description: 'Sale is deleted.',
  })
  @Get()
  async getAllSales(): Promise<SaleRO[]> {
    throw new NotImplementedException();
  }

  @ApiOperation({
    summary: 'Update sale',
  })
  @Patch(':id')
  async updateSale(): Promise<SaleRO> {
    throw new NotImplementedException();
  }
}
