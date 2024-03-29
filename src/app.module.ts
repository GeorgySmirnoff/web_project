import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ItemModule } from './item/item.module';
import { CategoryModule } from './item-category/item-category.module';
import { SaleModule } from './sale/sale.module';
import { UserModule } from './user/user.module';
import { CartService } from './cart/cart.service';
import { CartModule } from './cart/cart.module';
import { AppGateway } from './app.gateway';
import { GatewayModule } from './gateway/gateway.module';

@Module({
  imports: [ItemModule, CategoryModule, SaleModule, UserModule, CartModule, GatewayModule],
  controllers: [AppController],
  providers: [AppService, CartService, AppGateway],
})
export class AppModule {}
