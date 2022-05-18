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
import { ItemService } from './item.service';
import { ItemCreateDto } from './dto/item.create.dto';
import { ItemUpdateDto } from './dto/item.update.dto';
import { Item } from '@prisma/client';

@ApiTags('item')
@Controller('item')
export class ItemController {
  constructor(private readonly itemService: ItemService) {}

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
  async getItemById(@Param('id', ParseIntPipe) id: number): Promise<Item> {
    return this.itemService.getItemById({ id: id });
  }

  // @Get('all')
  // async getAll(): Promise<Item[]> {
  //   return this.itemService.getAll();
  // }

  @ApiOperation({
    summary: 'Add new Item',
  })
  @ApiResponse({
    status: 200,
    description: 'Item is added.',
  })
  @ApiResponse({
    status: 403,
    description: 'Forbidden.',
  })
  @Post()
  async addItem(@Body() itemCreateDto: ItemCreateDto): Promise<Item> {
    return this.itemService.addItem(itemCreateDto);
  }
  @ApiOperation({
    summary: 'Delete Item by id.r',
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
  async deleteItemById(@Param('id', ParseIntPipe) id: number): Promise<Item> {
    return this.itemService.deleteItemById({ id: id });
  }

  @Patch(':id')
  async updateItemById(
    @Param('id', ParseIntPipe) id: number,
    @Body() itemUpdateDto: ItemUpdateDto,
  ): Promise<Item> {
    return this.itemService.updateItemById({ id: id }, itemUpdateDto);
  }
}
