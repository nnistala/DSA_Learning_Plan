
import { SignInForm } from '@/components/auth/signin-form';

export default function SignInPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-background via-background to-muted/20">
      <div className="w-full max-w-md">
        <SignInForm />
      </div>
    </div>
  );
}
