import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import { AppModule } from './app.module';
import * as hbs from 'hbs';
import { LoadingInterceptor } from './timeInterceptop';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.useStaticAssets(join(__dirname, '..', 'public'));
  app.setBaseViewsDir(join(__dirname, '..', 'views'));

  app.setViewEngine('hbs');
  hbs.registerPartials(join(__dirname, '..', 'views'));
  hbs.registerPartials(join(__dirname, '..', 'views/partials'));

  app.useGlobalInterceptors(new LoadingInterceptor());

  const config = new DocumentBuilder().build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  const port = parseInt(process.env.PORT) || 3000;
  await app.listen(port);
}
bootstrap();
