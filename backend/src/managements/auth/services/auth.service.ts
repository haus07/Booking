import { BadRequestException, Injectable, InternalServerErrorException } from '@nestjs/common';
import { RegisterDto } from '../dtos/Register.dto';
import { UsersService } from 'src/managements/users/services/users.service';
import { RoleService } from 'src/managements/users/services/role.service';

@Injectable()
export class AuthService {

    constructor(private readonly userService: UsersService,        
    ) {
        

    }

    async createUserAccount(data:RegisterDto) {
        const user = await this.userService.create(data)
        return user
    }

   
}
