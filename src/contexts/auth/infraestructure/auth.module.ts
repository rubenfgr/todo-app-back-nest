import { Module } from '@nestjs/common';
import { AuthService } from '../application/auth.service';
import { AuthController } from './controllers/auth.controller';
import { UsersModule } from '../../users/infraestructure/users.module';
import { JwtModule } from '@nestjs/jwt';
import { envs } from '../../../config/envs';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from './guards/auth.guard';

@Module({
  imports: [
    UsersModule,
    JwtModule.register({
      global: true,
      secret: envs.jwtSecret,
      signOptions: { expiresIn: '60s' },
    }),
  ],
  controllers: [AuthController],
  providers: 
  [
    AuthService,
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
  ],
})
export class AuthModule {}
