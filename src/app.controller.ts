import { Get, Controller, Render } from '@nestjs/common';
import { ApiExcludeEndpoint } from '@nestjs/swagger';

@Controller()
export class AppController {
  @ApiExcludeEndpoint()
  @Get('/')
  @Render('index')
  root() {
    return { user: '' };
  }
  @ApiExcludeEndpoint()
  @Get('drinks')
  @Render('drinks')
  drinks() {
    return {};
  }
  @ApiExcludeEndpoint()
  @Get('pizza')
  @Render('pizza')
  root3() {
    return {
      user: { login: 'user' },
    };
  }

  @ApiExcludeEndpoint()
  @Get('registration')
  @Render('registration')
  root4() {
    return {};
  }

  @ApiExcludeEndpoint()
  @Get('sales')
  @Render('sales')
  root5() {
    return {};
  }

  @ApiExcludeEndpoint()
  @Get('chat')
  @Render('chat')
  root6() {
    return {};
  }
}
