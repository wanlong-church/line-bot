import { Test, TestingModule } from '@nestjs/testing';
import { LineController } from './line.controller';
import { LineService } from './line.service';

describe('LineController', () => {
  let lineController: LineController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [LineController],
      providers: [LineService],
    }).compile();

    lineController = app.get<LineController>(LineController);
  });

  describe('postMessageWebhook', () => {
    it('should raise on empty body', async () => {
      expect(lineController.postMessageWebhook({})).rejects.toThrow(TypeError);
    });

    it('should return success on empty event', async () => {
      lineController.postMessageWebhook({ events: [] }).then((result) => {
        expect(result).toBe('Webhook processed successfully');
      });
    });
  });
});
