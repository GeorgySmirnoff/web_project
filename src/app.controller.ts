import { Get, Controller, Render } from '@nestjs/common';

@Controller()
export class AppController {
  @Get('/')
  @Render('index')
  root() {
    return { };
  }

  @Get('drinks')
  @Render('drinks')
  root2() {
    return { };
  }

  @Get('pizza')
  @Render('pizza')
  root3() {
    return { };
  }

  @Get('registration')
  @Render('registration')
  root4() {
    return { };
  }

  @Get('sales')
  @Render('sales')
  root5() {
    return { };
  }



}