import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { LineService } from './line.service';

@ApiTags('Line Webhook')
@Controller('api/line/webhook')
export class LineController {
  constructor(private readonly lineService: LineService) {}

  @Post()
  async postMessageWebhook(@Body() body: Record<string, any>): Promise<string> {
    // receives webhook from line, echo message back to line, and replay with 200
    return this.lineService.postMessageWebhook(body);
  }
}
