import {
  Controller,
  Delete,
  Get,
  NotImplementedException,
  Param,
  Post,
} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { SaleRO } from '../sale/sale.interface';
@ApiTags('user')
@Controller('user')
export class UserController {
  @ApiOperation({
    summary: 'Get user',
  })
  @ApiResponse({
    status: 200,
    description: 'User is found.',
  })
  @ApiResponse({
    status: 404,
    description: 'User not found.',
  })
  @Get(':id')
  async getUser(@Param('id') id: number) {
    throw new NotImplementedException();
  }

  @ApiOperation({
    summary: 'Delete user by id',
  })
  @ApiResponse({
    status: 200,
    description: 'User is deleted.',
  })
  @ApiResponse({
    status: 403,
    description: 'Forbidden.',
  })
  @ApiResponse({
    status: 404,
    description: 'User not found.',
  })
  @Delete(':id')
  async deleteSale(@Param('id') id: number) {
    throw new NotImplementedException();
  }

  @ApiOperation({
    summary: 'Add new user',
  })
  @ApiResponse({
    status: 200,
    description: 'User is added.',
  })
  @ApiResponse({
    status: 404,
    description: 'Not found',
  })
  @Post(':name')
  async addUser(): Promise<SaleRO> {
    throw new NotImplementedException();
  }
}
