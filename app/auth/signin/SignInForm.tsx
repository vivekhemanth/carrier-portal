'use client';
import React, { useState } from 'react';
import InputField from '@/components/form/InputField';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';
import Link from 'next/link';
// import { VscError } from "react-icons/vsc";

interface FormData {
    email: string;
    password: string;
}

interface FieldConfig {
    label: string;
    name: keyof FormData;
    type: string;
}

const SignInForm: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        email: '',
        password: '',
    });
    const [error, setError] = useState<string | null>(null);
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);

        setIsLoading(true);

        const res = await signIn('credentials', {
            redirect: false,
            email: formData.email,
            password: formData.password,
        });

        setIsLoading(false);

        if (res?.ok) {
            router.push('/');
        } else {
            if (res?.error === 'CredentialsSignin') {
                setError('Invalid email or password. Please try again.');
            } else if (res?.error === 'User not found') {
                setError('No user found with this email.');
            } else {
                setError(res?.error || 'Something went wrong');
            }
        }
    };

    const fieldConfigs: FieldConfig[] = [
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

                <div className="form-control mt-6">
                    <button type="submit" className="btn btn-primary" disabled={isLoading}>
                        {isLoading && <span className="loading loading-spinner"></span>}
                        {isLoading ? 'Signing In...' : 'Sign In'}
                    </button>
                </div>
            </form>
            <p className="text-gray-600 mt-4">
                Don't have an account?{' '}
                <Link href="/auth/signup" className="link link-secondary underline-offset-4">Sign up</Link>.
            </p>
        </>
    );
};

export default SignInForm;
