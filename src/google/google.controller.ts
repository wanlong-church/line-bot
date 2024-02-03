import { Controller, Get } from '@nestjs/common';
import { GoogleService } from './google.service';
import { GoogleSheetResponse } from './_type';
import { SheetColumnProperty } from 'src/_type';

@Controller('api/google/drive')
export class GoogleController {
  constructor(private readonly googleService: GoogleService) {}

  @Get()
  async getDriveContent(): Promise<
    GoogleSheetResponse<SheetColumnProperty, string>
  > {
    // receives webhook from line, echo message back to line, and replay with 200
    return this.googleService.getDriveContent();
  }
}
