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
import { ItemService } from './item.service';
import { ItemRO } from './item.interface';

@ApiTags('item')
@Controller('item')
export class ItemController {
  constructor(private readonly memberService: ItemService) {}

  @ApiOperation({
    summary: 'Get Item',
  })
  @ApiResponse({
    status: 200,
    description: 'Item is found.',
  })
  @ApiResponse({
    status: 404,
    description: 'Item not found.',
  })
  @Get(':id')
  async getItem(): Promise<ItemRO> {
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
  @Post(':name')
  async addItem(): Promise<ItemRO> {
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
    status: 403,
    description: 'Forbidden.',
  })
  @ApiResponse({
    status: 404,
    description: 'Item not found.',
  })
  @Delete(':id')
  async deleteItem(@Param('id') id: number): Promise<ItemRO> {
    throw new NotImplementedException();
  }
}
