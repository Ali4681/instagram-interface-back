import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { LoginController } from './login.controller';
import { LoginService } from './login.service';
import { Login, LoginSchema } from './login.schema';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/instagram'),
    MongooseModule.forFeature([{ name: Login.name, schema: LoginSchema }]),
  ],
  controllers: [LoginController],
  providers: [LoginService],
})
export class AppModule {}
