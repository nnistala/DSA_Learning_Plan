
import { SignUpForm } from '@/components/auth/signup-form';

export default function SignUpPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-background via-background to-muted/20">
      <div className="w-full max-w-md">
        <SignUpForm />
      </div>
    </div>
  );
}
