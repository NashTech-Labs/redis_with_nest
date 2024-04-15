import { Injectable } from '@nestjs/common';
import Redis from 'ioredis';

@Injectable()
export class RedisServiceExample {
  private readonly redisClient: Redis;

  constructor() {
    this.redisClient = new Redis({
      host: 'localhost',
      port: 6379,
    });
  }

  async setValue(key: string, value: string): Promise<void> {
    await this.redisClient.set(key, value);
  }

  async getValue(key: string): Promise<string | null> {
    return await this.redisClient.get(key);
  }

  async quit(): Promise<void> {
    await this.redisClient.quit();
  }
}
