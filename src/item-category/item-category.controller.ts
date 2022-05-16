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

import { CategoryService } from './item-category.service';
import { CategoryCreateDto } from './dto/category.create.dto';
import { ItemCategory } from '@prisma/client';
import { CategoryUpdateDto } from './dto/create.update.dto';

@ApiTags('category')
@Controller('category')
@ApiTags('category')
@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @ApiOperation({
    summary: 'Get Category',
  })
  @ApiResponse({
    status: 200,
    description: 'Category is found.',
  })
  @ApiResponse({
    status: 404,
    description: 'Category is not found.',
  })
  @Get(':id')
  async getCategoryById(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<ItemCategory> {
    return this.categoryService.getCategoryById({ id: id });
  }

  @ApiOperation({
    summary: 'Add new category',
  })
  @ApiResponse({
    status: 200,
    description: 'category is added.',
  })
  @ApiResponse({
    status: 404,
    description: 'Not found',
  })
  @Post()
  async addCategory(
    @Body() categoryCreteDto: CategoryCreateDto,
  ): Promise<ItemCategory> {
    return this.categoryService.addCategory(categoryCreteDto);
  }

  @ApiOperation({
    summary: 'Delete category by id.r',
  })
  @ApiResponse({
    status: 200,
    description: 'Category is deleted.',
  })
  @ApiResponse({
    status: 404,
    description: 'Not found',
  })
  @Delete(':id')
  async deleteCategoryById(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<ItemCategory> {
    return this.categoryService.deleteCategoryById({ id: id });
  }

  @ApiOperation({
    summary: 'Get all category',
  })
  @ApiResponse({
    status: 200,
    description: 'Category is deleted.',
  })
  @Get()
  async getAll(): Promise<ItemCategory[]> {
    return this.categoryService.getAll();
  }

  @ApiOperation({
    summary: 'Update category',
  })
  @Patch(':id')
  async updateCategoryById(
    @Param('id', ParseIntPipe) id: number,
    @Body() categoryUpdateDto: CategoryUpdateDto,
  ): Promise<ItemCategory> {
    return this.categoryService.updateCategoryById(
      { id: id },
      categoryUpdateDto,
    );
  }
}
