import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Login } from './login.schema';

@Injectable()
export class LoginService {
  constructor(@InjectModel(Login.name) private loginModel: Model<Login>) {}

  async save(username: string, password: string) {
    const entry = new this.loginModel({ username, password });
    await entry.save();
    return { message: 'Saved successfully' };
  }
}
