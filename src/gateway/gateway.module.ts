import { Module } from '@nestjs/common';
import { GatewayService } from './gateway.service';
import { PrismaService } from '../prisma.service';

@Module({
  providers: [GatewayService, PrismaService],
  exports: [GatewayService],
})
export class GatewayModule {}
