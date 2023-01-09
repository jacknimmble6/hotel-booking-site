import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from '../users/entities/user.entity';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private usersService: UsersService,
  ) {}

  generateJwt(payload) {
    return this.jwtService.sign(payload);
  }

  async signIn(user) {
    if (!user) {
      throw new BadRequestException('Unauthenticated');
    }

    const userExists = await this.usersService.findOne(user.id);

    if (!userExists) {
      return this.registerUser(user);
    }
  }

  async registerUser(user: CreateUserDto) {
    try {
      const newUser = this.usersService.create(user);

      return newUser;
    } catch {
      throw new InternalServerErrorException();
    }
  }

  //async validateUser(id: string): Promise<User | null> {
    //const user = (await this.usersService.findOne(id))[0];
    //if (user && user.password === password) return user;
    //return null;
  //}

  async login(email) {
    return {
      access_token: this.jwtService.sign(
        {
          email: email,
        },
        {
          secret: process.env.JWT_SECRET,
          expiresIn: process.env.JWT_EXPIRE_TIME,
        },
      ),
    };
  }
}
