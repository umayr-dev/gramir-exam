import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useMutation } from '@tanstack/react-query';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { Eye, EyeOff, Loader2 } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { login } from '@/lib/api';
import type { ApiError } from '@/lib/api';
import { useAuthStore } from '@/store/auth';
import { usePhoneMask } from '@/lib/phoneMask';
import AnimatedCards from '../components/AnimatedCards';

const loginSchema = z.object({
  phone: z.string().min(1, 'Telefon raqam kiritish majburiy'),
  passwrod: z.string().min(1, 'Parol kiritish majburiy'),
});

type LoginForm = z.infer<typeof loginSchema>;

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const { setUser, setToken } = useAuthStore();

  const phoneMask = usePhoneMask();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>({
    resolver: zodResolver(loginSchema),
  });

  const loginMutation = useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      setUser(data.user);
      setToken(data.token);
      toast.success('Muvaffaqiyatli tizimga kirdingiz!');
      navigate('/dashboard');
    },
    onError: (error: ApiError) => {
      const errorMessage = error?.message || 'Telefon raqam yoki parol noto\'g\'ri';
      toast.error(errorMessage);
    },
  });

  const onSubmit = (data: LoginForm) => {
    loginMutation.mutate(data);
  };

  return (
    <div className="min-h-screen flex">
      {/* Chap qism: Forma */}
      <div className="w-full md:w-1/2 min-h-screen flex flex-col bg-white px-8 md:px-24 lg:px-32 py-12">
        {/* Logotip */}
        <div className="mb-12">
          <Link to="/login" className="select-none">
            <span className="text-3xl font-extrabold italic text-[#5B6CFF] select-none">Gramir</span>
          </Link>
        </div>
        {/* Forma markazda */}
        <div className="flex-1 flex flex-col justify-center">
          <div className="max-w-md w-full mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Tizimga Kirish</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              <div>
                <label htmlFor="phone" className="block text-gray-700 font-medium mb-1">
                  Telefon raqam <span className="text-red-500">*</span>
                </label>
                <Input
                  id="phone"
                  type="tel"
                  {...register('phone', {
                    onChange: (e) => {
                      phoneMask.onChange(e);
                      // react-hook-form uchun qiymatni yangilash
                      register('phone').onChange({
                        ...e,
                        target: {
                          ...e.target,
                          value: phoneMask.value,
                        },
                      });
                    },
                  })}
                  value={phoneMask.value}
                  maxLength={phoneMask.maxLength}
                  inputMode={phoneMask.inputMode}
                  pattern={phoneMask.pattern}
                  placeholder={phoneMask.placeholder}
                  className={`h-12 ${errors.phone ? 'border-red-500' : 'border-gray-300'}`}
                />
                {errors.phone && (
                  <p className="text-sm text-red-500 mt-1">{errors.phone.message}</p>
                )}
              </div>
              <div>
                <label htmlFor="passwrod" className="block text-gray-700 font-medium mb-1">
                  Parol <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <Input
                    id="passwrod"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Parolni kiriting"
                    {...register('passwrod')}
                    className={`h-12 pr-10 ${errors.passwrod ? 'border-red-500' : 'border-gray-300'}`}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                    tabIndex={-1}
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5 text-gray-400" />
                    ) : (
                      <Eye className="h-5 w-5 text-gray-400" />
                    )}
                  </button>
                </div>
                {errors.passwrod && (
                  <p className="text-sm text-red-500 mt-1">{errors.passwrod.message}</p>
                )}
              </div>
              <Button
                type="submit"
                className="w-full h-14 rounded-xl bg-gradient-to-r from-[#5B6CFF] to-[#A259FF] text-white text-lg font-semibold shadow-md border-0 focus:outline-none"
                disabled={loginMutation.isPending}
              >
                {loginMutation.isPending ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Kirish...
                  </>
                ) : (
                  'Kirish'
                )}
              </Button>
            </form>
            <div className="mt-6 flex flex-col items-center space-y-1 text-sm">
              <div>
                Parolni unutdingizmi?{' '}
                <Link to="#" className="text-[#5B6CFF] font-medium hover:underline">Tiklash</Link>
              </div>
              <div>
                Hisobingiz yo'qmi?{' '}
                <Link to="/register" className="text-[#5B6CFF] font-medium hover:underline">Ro'yxatdan o'tish</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden md:flex w-1/2 items-center justify-center bg-gradient-to-br from-[#5B6CFF] to-[#A259FF] relative">
        <div className="max-w-lg mx-auto text-white px-8">
          <h2 className="text-4xl font-extrabold mb-4 leading-tight">Post smarter, Grow faster</h2>
          <p className="text-lg mb-8 opacity-90">
            Streamline your social media workflow and achieve better results with our powerful tools.
          </p>
          <div className="w-full flex justify-center">
            <AnimatedCards />
          </div>
        </div>
        {/* Dekorativ doiralar */}
        <div className="absolute top-10 left-10 w-16 h-16 bg-white bg-opacity-10 rounded-full" />
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-white bg-opacity-10 rounded-full" />
      </div>
    </div>
  );
};

export default Login; 