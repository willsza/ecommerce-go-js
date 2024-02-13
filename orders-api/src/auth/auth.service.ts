import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

const users = [
  {
    id: 1,
    email: 'john@app.com',
    password: '123',
  },
  {
    id: 2,
    email: 'chris@app.com',
    password: '123',
  },
];

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  login(email: string, password: string) {
    const user = users.find(
      (user) => user.email === email && user.password === password,
    );

    if (!user) {
      throw new UnauthorizedException();
    }

    const payload = { sub: user.id, email: user.email };

    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
