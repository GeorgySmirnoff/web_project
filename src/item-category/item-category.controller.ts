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
import { ItemCategoryService } from './item-category.service';
import { ItemCategoryRO } from './item-category.interface';

@ApiTags('category')
@Controller('category')
export class ItemCategoryController {
  constructor(private readonly memberService: ItemCategoryService) {}

  @ApiOperation({
    summary: 'Get Category',
  })
  @ApiResponse({
    status: 200,
    description: 'Category is found.',
  })
  @ApiResponse({
    status: 404,
    description: 'Category not found.',
  })
  @Get(':id')
  async getCategoryById(): Promise<ItemCategoryRO> {
    throw new NotImplementedException();
  }

  @ApiOperation({
    summary: 'Get category by name',
  })
  @ApiResponse({
    status: 200,
    description: 'Category is found.',
  })
  @ApiResponse({
    status: 404,
    description: 'Category not found.',
  })
  @Get(':name')
  async getCategoryByName(): Promise<ItemCategoryRO> {
    throw new NotImplementedException();
  }

  @ApiOperation({
    summary: 'Add new category',
  })
  @ApiResponse({
    status: 200,
    description: 'Category is added.',
  })
  @ApiResponse({
    status: 403,
    description: 'Forbidden.',
  })
  @Post(':name')
  async addCategory(@Param('name') name: string): Promise<ItemCategoryRO> {
    throw new NotImplementedException();
  }

  @ApiOperation({
    summary: 'Delete category by id',
  })
  @ApiResponse({
    status: 200,
    description: 'Category is deleted.',
  })
  @ApiResponse({
    status: 403,
    description: 'Forbidden.',
  })
  @ApiResponse({
    status: 404,
    description: 'Category not found.',
  })
  @Delete(':id')
  async deleteCategory(@Param('id') id: number): Promise<ItemCategoryRO> {
    throw new NotImplementedException();
  }
}
