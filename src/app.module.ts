import { Module } from '@nestjs/common';
import { LineController } from './line/line.controller';
import { LineService } from './line/line.service';
import { GoogleController } from './google/google.controller';
import { GoogleService } from './google/google.service';
import { HomeController } from './home/home.controller';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [LineController, GoogleController, HomeController],
  providers: [LineService, GoogleService],
})
export class AppModule {}
