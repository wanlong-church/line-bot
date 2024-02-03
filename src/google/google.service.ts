import { Injectable } from '@nestjs/common';
import { google } from 'googleapis';
import * as fs from 'fs';
import * as path from 'path';
import axios from 'axios';

@Injectable()
export class GoogleService {
  async getDriveContent(): Promise<string[][]> {
    const keyFile = path.join(__dirname, '../../sa.json');
    const keys = JSON.parse(fs.readFileSync(keyFile, 'utf8'));
    const client = new google.auth.JWT(
      keys.client_email,
      null,
      keys.private_key,
      ['https://www.googleapis.com/auth/drive.readonly']
    );
    const sheet_client = google.sheets({ version: 'v4', auth: client })
    return sheet_client.spreadsheets.values.get({
      spreadsheetId: "1fo27VhYfFuacEBhXiA-HJG4IVTwban_fHzF_JaL65X8",
      range: "2024總表!A:U"
    }).then((res) => {
      return res.data.values
    });
  }
}

