/**
 * Next.js instrumentation. Runs once when the Node.js runtime starts.
 * Validates required env vars in production so the app fails fast.
 */
export async function register() {
  if (process.env.NEXT_RUNTIME === 'nodejs') {
    const { assertEnv } = await import('@/lib/env');
    assertEnv();
  }
}
