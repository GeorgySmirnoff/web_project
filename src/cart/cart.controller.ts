import {
  Controller,
  Delete,
  Get,
  NotImplementedException,
  Param,
  Post,
} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

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
    summary: 'Add new Item',
  })
  @ApiResponse({
    status: 200,
    description: 'Item is added.',
  })
  @ApiResponse({
    status: 404,
    description: 'Item not found',
  })
  @Post('add/:name')
  async postItem(@Param('id') id: number) {
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
  async deleteItem(@Param('id') id: number) {
    throw new NotImplementedException();
  }
}
