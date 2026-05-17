import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { LoginController } from './login.controller';
import { LoginService } from './login.service';
import { Login, LoginSchema } from './login.schema';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRoot(process.env.MONGO_URI as string),
    MongooseModule.forFeature([{ name: Login.name, schema: LoginSchema }]),
  ],
  controllers: [LoginController],
  providers: [LoginService],
})
export class AppModule {}
