import { Controller, Get } from '@nestjs/common';
import { RedisServiceExample } from './redis.service';

@Controller()
export class AppController {
  constructor(private readonly redisService: RedisServiceExample) {}

  @Get('set')
  async setValue(): Promise<string> {
    await this.redisService.setValue('test-key', 'test-value');
    return 'Value set in Redis';
  }

  @Get('get')
  async getValue(): Promise<string> {
    const value = await this.redisService.getValue('test-key');
    return value || 'Value not found in Redis';
  }
}
