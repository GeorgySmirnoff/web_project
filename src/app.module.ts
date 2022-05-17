import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ItemModule } from './item/item.module';
import { CategoryModule } from './item-category/item-category.module';
import { SaleModule } from './sale/sale.module';
import { UserModule } from './user/user.module';
import { CartService } from './cart/cart.service';
import { CartModule } from './cart/cart.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ItemModule,
    CategoryModule,
    SaleModule,
    UserModule,
    CartModule,
    AuthModule,
    ConfigModule.forRoot(),
    AuthModule.forRoot({
      connectionURI: process.env.ConnectionURI,
      apiKey: process.env.apiKey,
      appInfo: {
        appName: 'web-project-sem6',
        apiDomain: 'http://localhost:80/',
        websiteDomain: 'http://localhost:80/',
        apiBasePath: '/auth',
        websiteBasePath: '/auth',
      },
    }),
  ],
  controllers: [AppController],
  providers: [AppService, CartService],
})
export class AppModule {}
