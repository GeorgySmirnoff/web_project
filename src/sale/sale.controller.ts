import {
  Get,
  Post,
  Delete,
  Param,
  Controller,
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
    description: 'Sale not found.',
  })
  @Get(':id')
  async getItem(@Param('id') id: number): Promise<SaleRO> {
    throw new NotImplementedException();
  }

  @ApiOperation({
    summary: 'Add new item',
  })
  @ApiResponse({
    status: 200,
    description: 'item is added.',
  })
  @ApiResponse({
    status: 403,
    description: 'Forbidden.',
  })
  @Post('add/:name')
  async addItem(@Param('name') name: string): Promise<SaleRO> {
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
    status: 403,
    description: 'Forbidden.',
  })
  @ApiResponse({
    status: 404,
    description: 'Sale not found.',
  })
  @Delete(':id')
  async deleteItem(@Param('id') id: number): Promise<SaleRO> {
    throw new NotImplementedException();
  }
}
