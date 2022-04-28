import {
  Body,
  Controller,
  Delete,
  Get,
  NotImplementedException,
  Param,
  Post,
} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { UserService } from './user.service';
import { User } from '@prisma/client';
import { UserCreateDto } from './dto/user.create.dto';

@ApiTags('user')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
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
  async getUserById(@Param('id') id: number): Promise<User> {
    return this.userService.getUserById({ id: id });
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
  async deleteUserById(@Param('id') id: number): Promise<User> {
    return this.userService.deleteUserById({ id: id });
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
  @Post()
  async addUser(@Body() userCreateDto: UserCreateDto): Promise<User> {
    return this.userService.addUser(userCreateDto);
  }
}
