import { Queue, Worker, QueueEvents } from 'bullmq';
import Redis from 'ioredis';

export const PAYMENT_QUEUE_NAME = 'payment-processing-queue';

export function createRedisConnection(redisUrl: string) {
  return new Redis(redisUrl, { maxRetriesPerRequest: null });
}

export function createPaymentQueue(redisUrl: string) {
  const connection = createRedisConnection(redisUrl);
  return new Queue(PAYMENT_QUEUE_NAME, { connection });
}
