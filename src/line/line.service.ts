import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class LineService {
  async postMessageWebhook(body: Record<string, any>): Promise<string> {
    const url = 'https://api.line.me/v2/bot/message/reply';

    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.CHANNEL_ACCESS_TOKEN}`,
    };
    const events = body.events;
    for (const event of events) {
      const payload = {
        replyToken: event.replyToken,
        messages: [{ type: 'text', text: `received: ${event.message.text}` }],
      };
      console.log(payload);
      try {
        const response = await axios.post(url, payload, { headers });
        if (response.status !== 200) {
          console.log('Failed to send reply message');
        } else {
          console.log('Reply message sent successfully');
        }
      } catch (error) {
        console.log('Error sending reply message:', error.message);
        return 'Webhook processed failed';
      }
    }
    return 'Webhook processed successfully';
  }
}
