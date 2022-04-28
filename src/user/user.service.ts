import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { UserCreateDto } from './dto/user.create.dto';
import { PrismaService } from '../prisma.service';
import { Prisma, User } from '@prisma/client';

@Injectable()
export class UserService {
  constructor(private readonly prismaService: PrismaService) {}

  public async addUser(data: Prisma.UserCreateInput): Promise<User> {
    return this.prismaService.user.create({ data });
  }

  public async getUserById(
    id: Prisma.UserWhereUniqueInput,
  ): Promise<User | null> {
    const usersNum = await this.prismaService.user.count({
      where: id,
    });

    if (usersNum == 0) {
      throw new HttpException(
        { status: HttpStatus.NOT_FOUND, error: 'User not found' },
        HttpStatus.NOT_FOUND,
      );
    }

    return this.prismaService.user.findFirst({ where: id });
  }

  public async getAll(): Promise<User[] | null> {
    return this.prismaService.user.findMany();
  }

  public async deleteUserById(id: Prisma.UserWhereUniqueInput): Promise<User> {
    return this.prismaService.user.delete({ where: id });
  }

  public async updateUserById(
    id: Prisma.UserWhereUniqueInput,
    data: Prisma.UserUpdateInput,
  ): Promise<User> {
    const params = { where: id, data };

    return this.prismaService.user.update(params);
  }
}
