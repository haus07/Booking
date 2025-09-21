import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Role } from '../entities/role.entity';

@Injectable()
export class RoleService {
    constructor(@InjectRepository(Role)
                private readonly roleRepo:Repository<Role>) {
        
    }


    // tim role de map vao user
    async findRole(name:string):Promise<Role|null> {
        try {
            const role = await this.roleRepo.findOne({
            where: {
                name
            }
            })
            
            if (!role) {
                return null
            }
            return role
        } catch (error) {
            throw new InternalServerErrorException(
                "Lỗi server"
            )
        }
    }
}
