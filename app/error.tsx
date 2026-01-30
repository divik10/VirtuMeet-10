'use client';

import { useEffect } from 'react';
import { Button } from '@/components/ui/button';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      // eslint-disable-next-line no-console
      console.error('Application error:', error);
    }
  }, [error]);

  return (
    <div className="flex min-h-[50vh] flex-col items-center justify-center gap-4 px-4">
      <h2 className="text-center text-lg font-semibold text-white">
        Something went wrong
      </h2>
      <p className="max-w-md text-center text-sm text-sky-2">
        We couldn’t complete your request. Please try again.
      </p>
      <Button
        onClick={reset}
        variant="default"
        className="bg-blue-1 hover:bg-blue-1/90"
      >
        Try again
      </Button>
    </div>
  );
}
