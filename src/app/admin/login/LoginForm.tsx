'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { adminLoginSchema, type AdminLoginValues } from '@/lib/validations';
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';

export default function LoginForm(): React.JSX.Element {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<AdminLoginValues>({
    resolver: zodResolver(adminLoginSchema),
  });

  async function onSubmit(data: AdminLoginValues): Promise<void> {
    setError(null);
    try {
      const res = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        setError('Incorrect password. Please try again.');
        return;
      }

      router.push('/admin/donations');
      router.refresh();
    } catch {
      setError("We couldn't reach the server. Please try again.");
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
      <Input
        id="password"
        type="password"
        label="Admin Password"
        placeholder="••••••••"
        error={errors.password?.message}
        {...register('password')}
      />
      {error && <p className="text-sm text-error" role="alert">{error}</p>}
      <Button type="submit" variant="primary" size="lg" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? 'Signing in...' : 'Sign In'}
      </Button>
    </form>
  );
}
