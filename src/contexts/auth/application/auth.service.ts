import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../../users/application/users.service';
import { SignInDto } from './dto/sign-in.dto';
import { compareSync } from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { SignInResponseDto } from './dto/sign-in-response.dto';
import { RefreshDto } from './dto/refresh.dto';
import { envs } from '../../../config/envs';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async signIn(signInDto: SignInDto): Promise<SignInResponseDto> {
    const user = await this.usersService.findOneByEmail(signInDto.email);

    if (!compareSync(signInDto.password, user.password)) {
      throw new UnauthorizedException();
    }
    const { password, ...result } = user;

    return {
      token: this.jwtService.sign(result, {
        expiresIn: '1h',
      }),
      refreshToken: this.jwtService.sign(result, {
        expiresIn: '7d',
      }),
    };
  }

  async refresh(refreshDto: RefreshDto): Promise<SignInResponseDto> {
    try {
      const payload = await this.jwtService.verifyAsync(refreshDto.refreshToken, {
        secret: envs.jwtSecret,
      });
      const { iat, exp, ...result } = payload;
      return {
        token: this.jwtService.sign(result, {
          expiresIn: '60s',
        }),
        refreshToken: this.jwtService.sign(result, {
          expiresIn: '7d',
        }),
      };
    } catch {
      throw new UnauthorizedException();
    }
  }
}
