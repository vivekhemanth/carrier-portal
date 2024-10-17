import SignInForm from '@/app/auth/signin/SignInForm';
import SocialButtons from '@/app/auth/SocialButtons';

export default function SignInPage() {
  return (
    <>
      <h2 className="text-2xl font-medium mb-3">Sign In</h2>
      <p className="text-slate-600 mb-6">Welcome back! Please enter your details.</p>
      <SocialButtons />
      <div className="divider">Or</div>
      <SignInForm />
    </>
  );
}
