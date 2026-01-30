import { SignIn } from '@clerk/nextjs';

export default function SignInPage() {
  return (
    <main className="flex h-screen w-full items-center justify-center">
      <SignIn
        appearance={{
          elements: {
            headerTitle: 'Sign in to VirtuMeet',
            headerSubtitle: '',
          },
        }}
      />
    </main>
  );
}
