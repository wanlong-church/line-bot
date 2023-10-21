import { Module } from '@nestjs/common';
import { LineController } from './line/line.controller';
import { LineService } from './line/line.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [LineController],
  providers: [LineService],
})
export class AppModule {}
