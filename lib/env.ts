/**
 * Server-side env validation. Call from root layout or at app startup.
 * In Next.js, only server components and server actions can read server env vars.
 */
const requiredEnvVars = [
  'NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY',
  'CLERK_SECRET_KEY',
  'NEXT_PUBLIC_STREAM_API_KEY',
  'STREAM_SECRET_KEY',
] as const;

function getEnvVar(key: string): string | undefined {
  return process.env[key];
}

export function validateEnv(): { valid: boolean; missing: string[] } {
  const missing = requiredEnvVars.filter((key) => !getEnvVar(key));
  return {
    valid: missing.length === 0,
    missing: [...missing],
  };
}

/**
 * Use in production build or startup to fail fast if required env is missing.
 * Skip in development to allow partial setup.
 */
export function assertEnv(): void {
  if (process.env.NODE_ENV !== 'production') return;
  const { valid, missing } = validateEnv();
  if (!valid) {
    throw new Error(
      `Missing required environment variables: ${missing.join(', ')}. Check .env or deployment config.`
    );
  }
}

export function getBaseUrl(): string {
  const url = process.env.NEXT_PUBLIC_BASE_URL;
  if (url) return url.replace(/\/$/, '');
  if (typeof window !== 'undefined') return window.location.origin;
  return 'http://localhost:3000';
}
