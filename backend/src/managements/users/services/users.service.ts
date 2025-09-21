import { BadRequestException, Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../entities/user.entity';
import { Repository } from 'typeorm';
import { RegisterDto } from 'src/managements/auth/dtos/Register.dto';
import { ConflictException } from '@nestjs/common';
import { RoleService } from './role.service';
import { hashPassword } from 'src/utils/common';

@Injectable()
export class UsersService {
    constructor(@InjectRepository(User)
    private readonly userRepo: Repository<User>,
    private readonly roleService:RoleService) {
        
    }



    //check xem username co ton tai trong db chua
    async checkDataExist(data:RegisterDto):Promise<void> {
        try {
            const { 
                username,
                email,
                phone
            } = data
            const existingUser = await this.userRepo.findOne({
                where: [
                    {username},
                    {email},
                    {phone}
                ]
            })

            //return true neu user ton tai,false neu user khong ton tai

            if (existingUser) {
                if (existingUser.username === username) {
                    throw new ConflictException('Username already exists');
                }
                if (existingUser.email === email) {
                    throw new ConflictException('Email already exists');
                }
                if (existingUser.phone === phone) {
                    throw new ConflictException('Phone already exists');
                }
            }
            
        } catch (error) {
            console.error(error)
            throw new InternalServerErrorException(
                "Lỗi server"
            )
        }
    }

     async create(data:RegisterDto):Promise<User> {
            try {
                const {
                username,
                password,
                email,
                phone
            } = data
            
            await this.checkDataExist(data)
            const hash = await hashPassword(password)
            const role = await this.roleService.findRole("user")
                if (role === null) {
                throw new BadRequestException("Chưa tồn tại role user trong database")
            }    
                
                

            const userData = await this.userRepo.create({
                username,
                password: hash,
                email,
                phone,
                roles:[role]
            })
            const userSave = await this.userRepo.save(userData)

            return userSave
        } catch (error) {
            console.error(error)
            throw new InternalServerErrorException(
                "Lỗi server"
            )
       }

        
    }

    


}
