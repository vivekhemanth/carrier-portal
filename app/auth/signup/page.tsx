// app/auth/signup/page.tsx
// import dynamic from 'next/dynamic';
import SignupForm from '@/app/auth/signup/SignupForm';
import SocialButtons from '@/app/auth/SocialButtons';

// const SignupForm = dynamic(() => import('@/app/auth/signup/SignupForm'), { ssr: false });
// const SocialButtons = dynamic(() => import('@/app/auth/SocialButtons'), { ssr: false });

export default function SignupPage() {
  return (
    <>
      <h2 className="text-2xl font-medium mb-3">Join ShipmentX Carrier Portal</h2>
      <p className="text-slate-600 mb-6">Access loadboards like 123Loadboard, DAT, and more - all in one place.</p>
      <SocialButtons />
      <div className="divider">Or</div>
      <SignupForm />
    </>
  );
}
