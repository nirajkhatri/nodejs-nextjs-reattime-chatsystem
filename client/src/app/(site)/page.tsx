import Image from 'next/image';
import AuthForm from './components/AuthForm';

export default function Home() {
  return (
    <div
      className="
    flex
    flex-col
    justify-center
    py-12
    bg-gray-100
    min-h-full
    "
    >
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <Image
          alt="logo"
          height="48"
          width="48"
          className="mx-auto w-auto"
          src={'/images/logo.png'}
        />
        <h2 className="mt-6 text-center text-3xl font-bold text-gray-900 tracking-tight">
          Sign in to your account
        </h2>
        <AuthForm />
      </div>
    </div>
  );
}
