import { Body, Controller, Get, HttpCode, HttpStatus, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from '../../application/auth.service';
import { SignInDto } from '../../application/dto/sign-in.dto';
import { Public } from '../../../shared/decorators/public.decorator';
import { RefreshDto } from '../../application/dto/refresh.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Public()
  @Post('login')
  async login(@Body() signInDto: SignInDto) {
    const { token, refreshToken } = await this.authService.signIn(signInDto);
    return {
      ok: true,
      message: 'User logged in successfully',
      token,
      refreshToken,
    }
  }

  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }

  @Post('refresh')
  async refresh(@Body() refreshDto: RefreshDto) {
    const { token, refreshToken } = await this.authService.refresh(refreshDto);
    return {
      ok: true,
      message: 'User logged in successfully',
      token,
      refreshToken,
    }
  }
}
