import { Body, Controller, Post } from '@nestjs/common';
import { LoginService } from './login.service';

@Controller()
export class LoginController {
  constructor(private readonly loginService: LoginService) {}

  @Post('login')
  async login(@Body() body: { username: string; password: string }) {
    return this.loginService.save(body.username, body.password);
  }
}
