import { JwtModule } from '@nestjs/jwt';
import { Test, TestingModule } from '@nestjs/testing';
import { UsersModule } from '../../../users/infraestructure/users.module';
import { AuthGuard } from './auth.guard';
import { AuthService } from '../../application/auth.service';

describe('AuthGuard', () => {

  let guard: AuthGuard;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        UsersModule,
        JwtModule.register({}),
      ],
      providers: [AuthService, AuthGuard],
    })
    .compile();

    guard = module.get<AuthGuard>(AuthGuard);
  });

  it('should be defined', () => {
    expect(guard).toBeDefined();
  });
});
