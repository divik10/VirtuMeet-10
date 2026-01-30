'use client';

import { useEffect } from 'react';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      // eslint-disable-next-line no-console
      console.error('Global error:', error);
    }
  }, [error]);

  return (
    <html lang="en">
      <body className="min-h-screen bg-dark-2 text-white antialiased">
        <div className="flex min-h-screen flex-col items-center justify-center gap-6 px-4">
          <h1 className="text-xl font-semibold">Something went wrong</h1>
          <p className="max-w-md text-center text-sky-2">
            A critical error occurred. Please refresh the page or try again
            later.
          </p>
          <button
            type="button"
            onClick={reset}
            className="rounded-md bg-blue-1 px-4 py-2 text-sm font-medium text-white hover:bg-blue-1/90 focus:outline-none focus:ring-2 focus:ring-blue-1 focus:ring-offset-2 focus:ring-offset-dark-2"
          >
            Try again
          </button>
        </div>
      </body>
    </html>
  );
}
