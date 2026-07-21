import { describe, it, expect } from 'vitest';
import { validateEnv, EnvSchema } from '@atmos/validators';

describe('Environment Validator Schema (@atmos/validators)', () => {
  it('should validate valid environment variables correctly', () => {
    const validEnv = {
      NODE_ENV: 'development',
      PORT: '3000',
      DATABASE_URL: 'postgresql://postgres:postgrespassword@localhost:5432/atmos_db',
      REDIS_URL: 'redis://localhost:6379',
    };

    const parsed = validateEnv(validEnv);
    expect(parsed.NODE_ENV).toBe('development');
    expect(parsed.PORT).toBe(3000);
    expect(parsed.DATABASE_URL).toBe('postgresql://postgres:postgrespassword@localhost:5432/atmos_db');
  });

  it('should throw an error when DATABASE_URL is missing or invalid', () => {
    const invalidEnv = {
      NODE_ENV: 'development',
      DATABASE_URL: 'not-a-url',
    };

    expect(() => validateEnv(invalidEnv)).toThrow('Invalid environment configuration');
  });
});
