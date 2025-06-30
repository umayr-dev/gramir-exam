import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useAuthStore } from '@/store/auth';
import { useRegister } from '@/hooks/useRegister';
import type { AuthResponse, ApiError } from '@/lib/api';

const registerSchema = z.object({
  firstName: z.string().min(1, 'Ism kiritish majburiy'),
  lastName: z.string().min(1, 'Familiya kiritish majburiy'),
  phone: z.string().min(1, 'Telefon raqam kiritish majburiy'),
  password: z.string().min(6, 'Parol kamida 6 ta belgidan iborat bo\'lishi kerak'),
});

type RegisterForm = z.infer<typeof registerSchema>;

const RegisterForm = () => {
  const navigate = useNavigate();
  const { setUser, setToken } = useAuthStore();

  const { register, handleSubmit, formState: { errors } } = useForm<RegisterForm>({
    resolver: zodResolver(registerSchema),
  });

  const registerMutation = useRegister<AuthResponse, ApiError, RegisterForm>({
    onSuccess: (data: AuthResponse) => {
      setUser(data.user);
      setToken(data.token);
      toast.success("Muvaffaqiyatli ro'yxatdan o'tdingiz!");
      navigate('/dashboard');
    },
    onError: (error: ApiError) => {
      toast.error(error?.message || "Ro'yxatdan o'tishda xatolik yuz berdi");
    },
  });

  const onSubmit = (data: RegisterForm) => {
    registerMutation.mutate(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div>
        <label htmlFor="firstName" className="block text-gray-700 font-medium mb-1">
          Ism <span className="text-red-500">*</span>
        </label>
        <Input
          id="firstName"
          type="text"
          {...register('firstName')}
          className={`h-12 ${errors.firstName ? 'border-red-500' : 'border-gray-300'}`}
        />
        {errors.firstName && (
          <p className="text-sm text-red-500 mt-1">{errors.firstName.message}</p>
        )}
      </div>
      <div>
        <label htmlFor="lastName" className="block text-gray-700 font-medium mb-1">
          Familiya <span className="text-red-500">*</span>
        </label>
        <Input
          id="lastName"
          type="text"
          {...register('lastName')}
          className={`h-12 ${errors.lastName ? 'border-red-500' : 'border-gray-300'}`}
        />
        {errors.lastName && (
          <p className="text-sm text-red-500 mt-1">{errors.lastName.message}</p>
        )}
      </div>
      <div>
        <label htmlFor="phone" className="block text-gray-700 font-medium mb-1">
          Telefon raqam <span className="text-red-500">*</span>
        </label>
        <Input
          id="phone"
          type="tel"
          {...register('phone')}
          className={`h-12 ${errors.phone ? 'border-red-500' : 'border-gray-300'}`}
        />
        {errors.phone && (
          <p className="text-sm text-red-500 mt-1">{errors.phone.message}</p>
        )}
      </div>
      <div>
        <label htmlFor="password" className="block text-gray-700 font-medium mb-1">
          Parol <span className="text-red-500">*</span>
        </label>
        <Input
          id="password"
          type="password"
          {...register('password')}
          className={`h-12 ${errors.password ? 'border-red-500' : 'border-gray-300'}`}
        />
        {errors.password && (
          <p className="text-sm text-red-500 mt-1">{errors.password.message}</p>
        )}
      </div>
      <Button
        type="submit"
        className="w-full h-14 rounded-xl bg-gradient-to-r from-[#5B6CFF] to-[#A259FF] text-white text-lg font-semibold shadow-md border-0 focus:outline-none"
        disabled={registerMutation.isPending}
      >
        {registerMutation.isPending ? "Ro'yxatdan o'tish..." : "Ro'yxatdan o'tish"}
      </Button>
    </form>
  );
};

export default RegisterForm; 