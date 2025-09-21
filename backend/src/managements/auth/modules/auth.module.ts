import { Module } from '@nestjs/common';
import { AuthService } from '../services/auth.service';
import { AuthController } from '../controllers/auth.controller';
import { UsersModule } from 'src/managements/users/modules/users.module';

@Module({
  imports:[UsersModule],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule { }

