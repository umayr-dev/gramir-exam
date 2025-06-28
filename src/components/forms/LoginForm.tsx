import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useAuthStore } from '@/store/auth';
import { useLogin } from '@/hooks/useLogin';

const loginSchema = z.object({
  phone: z.string().min(1, 'Telefon raqam kiritish majburiy'),
  passwrod: z.string().min(1, 'Parol kiritish majburiy'),
});

type LoginForm = z.infer<typeof loginSchema>;

const LoginForm = () => {
  const navigate = useNavigate();
  const { setUser, setToken } = useAuthStore();

  const { register, handleSubmit, formState: { errors } } = useForm<LoginForm>({
    resolver: zodResolver(loginSchema),
  });

  const loginMutation = useLogin({
    onSuccess: (data) => {
      setUser(data.user);
      setToken(data.token);
      toast.success('Muvaffaqiyatli tizimga kirdingiz!');
      navigate('/dashboard');
    },
    onError: (error) => {
      toast.error(error?.message || 'Telefon raqam yoki parol noto\'g\'ri');
    },
  });

  const onSubmit = (data: LoginForm) => {
    loginMutation.mutate(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
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
        <label htmlFor="passwrod" className="block text-gray-700 font-medium mb-1">
          Parol <span className="text-red-500">*</span>
        </label>
        <Input
          id="passwrod"
          type="password"
          {...register('passwrod')}
          className={`h-12 ${errors.passwrod ? 'border-red-500' : 'border-gray-300'}`}
        />
        {errors.passwrod && (
          <p className="text-sm text-red-500 mt-1">{errors.passwrod.message}</p>
        )}
      </div>
      <Button
        type="submit"
        className="w-full h-14 rounded-xl bg-gradient-to-r from-[#5B6CFF] to-[#A259FF] text-white text-lg font-semibold shadow-md border-0 focus:outline-none"
        disabled={loginMutation.isPending}
      >
        {loginMutation.isPending ? 'Kirish...' : 'Kirish'}
      </Button>
    </form>
  );
};

export default LoginForm; 