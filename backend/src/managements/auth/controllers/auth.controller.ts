import { Body, Controller, HttpStatus, Post, Req, Res, UsePipes, ValidationPipe } from '@nestjs/common';
import { AuthService } from '../services/auth.service';
import { RegisterDto } from '../dtos/Register.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }
  
  @Post('')
  @UsePipes(new ValidationPipe())
  async register(@Res() res,
    @Body() dto:RegisterDto) {
    try {
      const user = await this.authService.createUserAccount(dto)
      return res.status(HttpStatus.CREATED).json({
        data: user,
        message:"Đăng kí thành công"
      })
      
    } catch (error) {
      console.error(error)
      res.status(HttpStatus.OK).json({
        message:error?.response?.message
      })
    }
  }
}
