import { Controller, Get } from '@nestjs/common';

@Controller('api/health')
export class HomeController {
  @Get()
  async getStatus(): Promise<string> {
    // receives webhook from line, echo message back to line, and replay with 200
    return 'ok';
  }
}
