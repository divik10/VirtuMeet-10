import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-6 px-4">
      <h1 className="text-2xl font-bold text-white">Page not found</h1>
      <p className="max-w-md text-center text-sky-2">
        The page you’re looking for doesn’t exist or has been moved.
      </p>
      <Button asChild variant="default" className="bg-blue-1 hover:bg-blue-1/90">
        <Link href="/">Back to home</Link>
      </Button>
    </div>
  );
}
