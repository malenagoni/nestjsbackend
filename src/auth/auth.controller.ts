import { Controller, Post, Body, ValidationPipe } from '@nestjs/common';
import { LoginDTO, RegisterDTO } from '../models/user.model';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/register')
  register(@Body(ValidationPipe) credentials: RegisterDTO) {
    return this.authService.register(credentials);
  }

  @Post('/login')
  login(@Body(ValidationPipe) credentials: LoginDTO) {
    return this.authService.login(credentials);
  }
}
