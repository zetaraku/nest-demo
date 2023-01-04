import { Controller, Get } from '@nestjs/common';
import { ApiSecurity } from '@nestjs/swagger';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('without-decorator')
  withoutDecorator(): string {
    return this.appService.getHello();
  }

  @Get('with-decorator')
  @ApiSecurity('recaptcha')
  withDecorator(): string {
    return this.appService.getHello();
  }
}
