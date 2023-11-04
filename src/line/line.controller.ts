import { Body, Controller, Post, Get } from '@nestjs/common';
import { LineService } from './line.service';

@Controller('api/line/webhook')
export class LineController {
  constructor(private readonly lineService: LineService) {}

  @Post()
  async postMessageWebhook(@Body() body: Record<string, any>): Promise<string> {
    // receives webhook from line, echo message back to line, and replay with 200
    return this.lineService.postMessageWebhook(body);
  }

  @Get()
  async getStatus(): Promise<string> {
    // receives webhook from line, echo message back to line, and replay with 200
    return 'ok';
  }
}
