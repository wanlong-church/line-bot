import { Body, Controller, Post, Get } from '@nestjs/common';
import { GoogleService } from './google.service';

@Controller('api/google/drive')
export class GoogleController {
  constructor(private readonly googleService: GoogleService) {}

  @Get()
  async getDriveContent(): Promise<string[][]> {
    // receives webhook from line, echo message back to line, and replay with 200
    return this.googleService.getDriveContent();
  }
}

