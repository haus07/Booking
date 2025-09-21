import { Module } from '@nestjs/common';
import { UsersService } from '../services/users.service';
import { UsersController } from '../controllers/users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../entities/user.entity';
import { Role } from '../entities/role.entity';
import { RoleService } from '../services/role.service';

@Module({
  imports: [TypeOrmModule.forFeature([User,Role])],
  controllers: [UsersController],
  providers: [UsersService,RoleService],
  exports:[UsersService,RoleService]
})
export class UsersModule {}
