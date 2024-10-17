'use client'; // This ensures the SignupForm runs as a client component
import React, { useState } from 'react';
import InputField from '@/components/form/InputField';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

interface FormData {
  name: string;
  email: string;
  password: string;
}

interface FieldConfig {
  label: string;
  name: keyof FormData;
  type: string;
}

const SignupForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    password: '',
  });
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null); 

    const res = await fetch('/api/auth/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const data = await res.json();

    if (res.ok) {
      router.push('/');
    } else {
      setError(data.error || 'Something went wrong');
    }
  };

  const fieldConfigs: FieldConfig[] = [
    { label: 'Name', name: 'name', type: 'text' },
    { label: 'Email', name: 'email', type: 'email' },
    { label: 'Password', name: 'password', type: 'password' },
  ];

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-2">
          {fieldConfigs.map((field) => (
            <InputField
              key={field.name}
              label={field.label}
              name={field.name}
              type={field.type}
              value={formData[field.name]}
              onChange={handleChange}
              required
            />
          ))}
        </div>

        {error && <p className="text-red-500">{error}</p>} {/* Display errors */}

        <div className="form-control mt-7">
          <p className="text-sm text-gray-600 mb-3">
            By clicking the Sign Up button, you agree to our{' '}
            <a href="/terms" className="text-blue-600">Terms and Conditions</a> and{' '}
            <a href="/privacy" className="text-blue-600">Privacy Policy</a>.
          </p>
          <button type="submit" className="btn btn-primary">
            Sign Up
          </button>
        </div>
      </form>
      <p className="text-gray-600 mt-4">
        Already have an account?{' '}
        <Link href="/auth/signin" className="link link-secondary underline-offset-4">Sign in</Link>.
      </p>
    </>
  );
};

export default SignupForm;
