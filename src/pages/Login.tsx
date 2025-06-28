import LoginForm from '@/components/forms/LoginForm';
import AnimatedCards from '../components/AnimatedCards';

const Login = () => (
  <div className="min-h-screen flex">
    {/* Chap qism: Forma */}
    <div className="w-full md:w-1/2 min-h-screen flex flex-col bg-white px-8 md:px-24 lg:px-32 py-12">
      {/* Logotip */}
      <div className="mb-12">
        <span className="text-3xl font-extrabold italic text-[#5B6CFF] select-none">Gramir</span>
      </div>
      <div className="flex-1 flex flex-col justify-center">
        <div className="max-w-md w-full mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Tizimga Kirish</h2>
          <LoginForm />
          <div className="mt-6 flex flex-col items-center space-y-1 text-sm">
            <div>
              Parolni unutdingizmi?{' '}
              <a href="#" className="text-[#5B6CFF] font-medium hover:underline">Tiklash</a>
            </div>
            <div>
              Hisobingiz yo'qmi?{' '}
              <a href="/register" className="text-[#5B6CFF] font-medium hover:underline">Ro'yxatdan o'tish</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* O'ng qism: Gradient va matn */}
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

export default Login; 