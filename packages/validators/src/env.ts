import { z } from 'zod';

export const EnvSchema = z.object({
  NODE_ENV: z.enum(['development', 'test', 'production']).default('development'),
  PORT: z.coerce.number().default(3000),
  DATABASE_URL: z.string().url('DATABASE_URL must be a valid PostgreSQL connection string'),
  REDIS_URL: z.string().url('REDIS_URL must be a valid Redis connection string').default('redis://localhost:6379'),
  SANITY_PROJECT_ID: z.string().optional(),
  SANITY_DATASET: z.string().optional(),
});

export type Env = z.infer<typeof EnvSchema>;

export function validateEnv(env: Record<string, string | undefined>): Env {
  const result = EnvSchema.safeParse(env);
  if (!result.success) {
    console.error('❌ Invalid Environment Variables:', result.error.format());
    throw new Error('Invalid environment configuration');
  }
  return result.data;
}
