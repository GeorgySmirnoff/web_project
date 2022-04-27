import {
  Controller,
  Delete,
  Get,
  NotImplementedException,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { SaleRO } from '../sale/sale.interface';

@ApiTags('cart')
@Controller('cart')
export class CartController {
  @ApiOperation({
    summary: 'Get cart',
  })
  @ApiResponse({
    status: 200,
    description: 'Cart is found',
  })
  @ApiResponse({
    status: 404,
    description: 'Sale not found.',
  })
  @Get(':id')
  async getCart(@Param('id') id: number) {
    throw new NotImplementedException();
  }

  @ApiOperation({
    summary: 'Add new cart',
  })
  @ApiResponse({
    status: 200,
    description: 'Item is added.',
  })
  @ApiResponse({
    status: 404,
    description: 'Item not found',
  })
  @Post(':id')
  async postItem() {
    throw new NotImplementedException();
  }

  @ApiOperation({
    summary: 'Delete item by id.r',
  })
  @ApiResponse({
    status: 200,
    description: 'Item is deleted.',
  })
  @ApiResponse({
    status: 404,
    description: 'Item not found.',
  })
  @Delete(':id')
  async deleteCart() {
    throw new NotImplementedException();
  }

  @ApiOperation({
    summary: 'Update cart',
  })
  @Patch(':id')
  async updateCart(): Promise<SaleRO> {
    throw new NotImplementedException();
  }
}
