import { Get, Controller, Render } from '@nestjs/common';

@Controller()
export class AppController {
  @Get('/')
  @Render('index')
  root() {
    return { user: '' };
  }

  @Get('drinks')
  @Render('drinks')
  drinks() {
    return {};
  }

  @Get('pizza')
  @Render('pizza')
  root3() {
    return {
      user: { login: 'user' },
    };
  }

  @Get('registration')
  @Render('registration')
  root4() {
    return {};
  }

  @Get('sales')
  @Render('sales')
  root5() {
    return {};
  }
}
